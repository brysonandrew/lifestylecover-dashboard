import * as React from "react"

export function renderSwitch(
  key: string | number,
  callbacks: Record<string, (props) => JSX.Element>,
  defaultCallback?: (props) => JSX.Element,
  props?: any
): JSX.Element | null {
  if (callbacks[key]) {
    return callbacks[key](props)
  } else {
    if (defaultCallback) {
      return defaultCallback(props)
    } else {
      return null
    }
  }
}

export const childrenWithProps = (children, props) =>
  React.Children.map(children, child => React.cloneElement(child, props))
