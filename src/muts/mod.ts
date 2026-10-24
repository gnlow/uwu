const size =
(n: number | string) =>
    Number.isNaN(Number(n))
        ? `${n}`
        : `${n}px`

export const display =
(el: HTMLElement) =>
(s: string) => {
    el.style.display = s
}

export const block =
(el: HTMLElement) =>
() =>
    display(el)("block")

export const inline =
(el: HTMLElement) =>
() =>
    display(el)("inline")

export const inlineBlock =
(el: HTMLElement) =>
() =>
    display(el)("inline-block")

export const flex =
(el: HTMLElement) =>
() =>
    display(el)("flex")

export const grid =
(el: HTMLElement) =>
() =>
    display(el)("grid")

export const p =
(el: HTMLElement) =>
(...ns: (number | string)[]) => {
    el.style.padding = ns.map(size).join(" ")
}

export const m =
(el: HTMLElement) =>
(...ns: (number | string)[]) => {
    el.style.margin = ns.map(size).join(" ")
}

export const w =
(el: HTMLElement) =>
(n: number | string) => {
    el.style.width = size(n)
}

export const h =
(el: HTMLElement) =>
(n: number | string) => {
    el.style.height = size(n)
}

export const bg =
(el: HTMLElement) =>
(s: string) => {
    el.style.background = s
}

export const position =
(el: HTMLElement) =>
(s: string) => {
    el.style.position = s
}

export const _static =
(el: HTMLElement) =>
() =>
    position(el)("static")

export const relative =
(el: HTMLElement) =>
() =>
    position(el)("relative")

export const absolute =
(el: HTMLElement) =>
() =>
    position(el)("absolute")

export const fixed =
(el: HTMLElement) =>
() =>
    position(el)("fixed")

export const sticky =
(el: HTMLElement) =>
() =>
    position(el)("sticky")

export const b =
(el: HTMLElement) =>
(...ns: (number | string)[]) => {
    el.style.border = ns.map(size).join(" ")
}

export const r =
(el: HTMLElement) =>
(...ns: (number | string)[]) => {
    el.style.borderRadius = ns.map(size).join(" ")
}

export const font =
(el: HTMLElement) =>
(n: number | string) => {
    el.style.fontSize = size(n)
}
