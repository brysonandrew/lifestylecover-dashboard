import React from "react"

export const isBrowser: boolean = (process as any).browser
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
export const canUseDOM: boolean = !!(
  typeof window !== "undefined" &&
  typeof window.document !== "undefined" &&
  typeof window.document.createElement !== "undefined"
)

export const useIsomorphicLayoutEffect = canUseDOM
  ? React.useLayoutEffect
  : React.useEffect

/**
 * Simple localStorage with Cookie Fallback
 * v.1.0.0
 *
 * USAGE:
 * ----------------------------------------
 * Set New / Modify:
 *   store('my_key', 'some_value');
 *
 * Retrieve:
 *   store('my_key');
 *
 * Delete / Remove:
 *   store('my_key', null);
 */

export const store = (key: string, value?: string) => {
  let lsSupport = false

  // Check for native support
  if (localStorage) {
    lsSupport = true
  }

  // If value is detected, set new or modify store
  if (typeof value !== "undefined" && value !== null) {
    // Convert object values to JSON
    if (typeof value === "object") {
      value = JSON.stringify(value)
    }
    // Set the store
    if (lsSupport) {
      // Native support
      localStorage.setItem(key, value)
    } else {
      // Use Cookie
      createCookie(key, value, 30)
    }
  }

  let data

  // No value supplied, return value
  if (typeof value === "undefined") {
    // Get value
    if (lsSupport) {
      // Native support
      data = localStorage.getItem(key)
    } else {
      // Use cookie
      data = readCookie(key)
    }

    // Try to parse JSON...
    try {
      data = JSON.parse(data)
    } catch (e) {
      data = data
    }

    return data
  }

  // Null specified, remove store
  if (value === null) {
    if (lsSupport) {
      // Native support
      localStorage.removeItem(key)
    } else {
      // Use cookie
      createCookie(key, "", -1)
    }
  }

  /**
   * Creates new cookie or removes cookie with negative expiration
   * @param  key       The key or identifier for the store
   * @param  value     Contents of the store
   * @param  exp       Expiration - creation defaults to 30 days
   */

  function createCookie(key, value, exp) {
    let date = new Date()
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000)
    let expires = "; expires=" + date.toUTCString()
    document.cookie = key + "=" + value + expires + "; path=/"
  }

  /**
   * Returns contents of cookie
   * @param  key       The key or identifier for the store
   */

  function readCookie(key) {
    let nameEQ = key + "="
    let ca = document.cookie.split(";")
    for (let i = 0, max = ca.length; i < max; i++) {
      let c = ca[i]
      while (c.charAt(0) === " ") c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
    }
    return null
  }
}
