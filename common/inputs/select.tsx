import * as React from "react"
import { Field } from "formik"
import { Select as MaterialSelect, MenuItem } from "@material-ui/core"

type TSelectProps = {
  index: number
  menuItems: string[]
}

export const Select: React.FC<TSelectProps> = ({ index, menuItems }) => {
  return (
    <Field name={`links.${index}.type`} type="select" as={MaterialSelect}>
      {menuItems.map(item => (
        <MenuItem value={item}>{item}</MenuItem>
      ))}
    </Field>
  )
}
