import * as React from "react"
import { Field, FieldAttributes } from "formik"
import { Checkbox as MaterialCheckbox } from "@material-ui/core"

type TCheckboxProps = FieldAttributes<{}>

export const Checkbox = (props: TCheckboxProps) => {
  return <Field {...props} type="checkbox" as={MaterialCheckbox} />
}
