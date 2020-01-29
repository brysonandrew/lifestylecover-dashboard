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

export const formatDate = (date: string) => {
  if (date) {
    return `${date.substring(0, 4)}-${date.substring(4, 6)}-${date.substring(6, 8)}`
  } else {
    return date
  }
}
