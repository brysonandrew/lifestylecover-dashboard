import { defined } from "./variable-evaluation"

let throttleTimeoutId

export function throttle(fn: any, ms?: number) {
  if (defined(throttleTimeoutId)) {
    clearTimeout(throttleTimeoutId)
  }
  throttleTimeoutId = setTimeout(
    () => {
      fn()
      clearTimeout(throttleTimeoutId)
    },
    defined(ms) ? ms : 1000
  )
}

export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-NZ", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
