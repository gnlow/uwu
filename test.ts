import { Observable, Subject, tags } from "./mod.ts"

const { div } = tags

const inc$ = new Subject<number>
const dec$ = new Subject<number>
const cnt$ = Observable.merge(
    inc$.map(() => +1),
    dec$.map(() => -1),
).scan((a, b) => a+b, 1)

const app = div.p(10)(
    div.onclick(inc$)("+"),
    div.font(cnt$.map(x => x*10))(cnt$),
    div.onclick(dec$)("-"),
)

document.body.replaceChildren(app)
