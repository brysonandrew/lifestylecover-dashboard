import * as React from "react"
import { Radio } from "../inputs"

export const Radios = () => {
  return (
    <>
      <h4>yogurt</h4>
      <Radio name="yogurt" type="radio" value="peach" label="peach" />
      <Radio name="yogurt" type="radio" value="blueberry" label="blueberry" />
      <Radio name="yogurt" type="radio" value="apple" label="apple" />
    </>
  )
}
