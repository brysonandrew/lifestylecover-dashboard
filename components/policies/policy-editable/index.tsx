import * as React from "react"
import { TPolicy } from "../../../models/users"
import { PolicyEditableForm } from "./policy-editable-form"

export const PolicyEditable = (props: TPolicy) => {
  console.log(props)
  return (
    <div>
      <h2>Policy</h2>
      <PolicyEditableForm policyInfo={props} />
    </div>
  )
}
