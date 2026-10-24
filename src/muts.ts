const size =
(n: number) =>
    Number.isNaN(Number(n))
        ? `${n}`
        : `${n}px`

export const muts = {
    p: (el: HTMLElement) =>
    (...ns: number[]) => {
        el.style.padding = ns.map(size).join(" ")
    },
    font: (el: HTMLElement) =>
    (n: number) => {
        el.style.fontSize = size(n)
    },
} as Record<string, (el: HTMLElement) => (...args: any[]) => void>
