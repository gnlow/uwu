import * as muts_ from "./muts/mod.ts"

export const muts: Record<
    string,
    (el: HTMLElement) => (...args: any[]) => void
> = muts_
