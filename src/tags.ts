import { Velem } from "./Velem.ts"

export const tags = new Proxy({}, {
    get(target, prop) {
        if (typeof prop == "symbol") {
            return Reflect.get(target, prop)
        }
        return Velem(() => document.createElement(prop))
    },
}) as Record<string, Velem>
