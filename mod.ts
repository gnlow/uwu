import { Observable, Subject } from "http://gnlow.dev/rude@0.0.0-beta.5"
export { Observable, Subject }

const size =
(n: number) =>
    Number.isNaN(Number(n))
        ? `${n}`
        : `${n}px`

const muts = {
    p: (el: HTMLElement) =>
    (...ns: number[]) => {
        el.style.padding = ns.map(size).join(" ")
    },
    font: (el: HTMLElement) =>
    (n: number) => {
        el.style.fontSize = size(n)
    },
} as Record<string, (el: HTMLElement) => (...args: any[]) => void>

type Velem = {
    (...children: (HTMLElement | string | number | Observable<HTMLElement | string | number>)[]): HTMLElement
} & {
    [K in keyof typeof muts]: (...args: Parameters<ReturnType<(typeof muts)[K]>>) => Velem
}

const velem =
(makeEl: () => HTMLElement) => new Proxy(function () {}, {
    get(target, prop) {
        if (typeof prop == "symbol") {
            return Reflect.get(target, prop)
        }
        if (prop.startsWith("on")) {
            return (ob: Subject<unknown>) => velem(() => {
                const el = makeEl()
                if (!(ob instanceof Subject)) {
                    throw new Error("EventListener must be Subject")
                }
                el.addEventListener(prop.slice(2), e => ob.next(e))
                return el
            })
        }
        if (prop in muts) {
            return (...args: unknown[]) => velem(() => {
                const el = makeEl()
                if (args.some(arg => arg instanceof Observable)) {
                    Observable.combineLatest([args])
                        .subscribe(args => {
                            muts[prop](el)(...args)
                        })
                } else {
                    muts[prop](el)(...args)
                }
                return el
            })
        }
    },
    apply(target, thisArg, args) {
        const el = makeEl()
        args.forEach(arg => {
            if (arg instanceof Observable) {
                let child = document.createElement("template")
                el.append(child)
                arg.subscribe(v => {
                    if (!(v instanceof Element)) {
                        v = document.createTextNode(v)
                    }
                    child.replaceWith(v)
                    child = v
                })
            } else {
                if (!(arg instanceof Element)) {
                    arg = document.createTextNode(arg)
                }
                el.append(arg)
            } 
        })
        return el
    },
}) as Velem

export const tags = new Proxy({}, {
    get(target, prop) {
        if (typeof prop == "symbol") {
            return Reflect.get(target, prop)
        }
        return velem(() => document.createElement(prop))
    },
}) as Record<string, Velem>
