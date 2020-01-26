import * as React from "react"
import { Field } from "formik"
import { Select as MaterialSelect, MenuItem } from "@material-ui/core"

type TSelectProps = {
  menuItems: string[]
}

export const Select: React.FC<TSelectProps> = ({ menuItems }) => {
  return (
    <Field name="reviewConfig.reviewer" type="select" as={MaterialSelect}>
      {menuItems.map(item => (
        <MenuItem value={item}>{item}</MenuItem>
      ))}
    </Field>
  )
}
