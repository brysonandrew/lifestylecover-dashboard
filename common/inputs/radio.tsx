import * as React from "react"
import { useField, FieldAttributes } from "formik"
import { Radio as MaterialRadio, FormControlLabel } from "@material-ui/core"

type TRadioProps = { label: string } & FieldAttributes<{}>

export const Radio: React.FC<TRadioProps> = ({ label, ...props }) => {
  const [field] = useField<{}>(props)
  return (
    <FormControlLabel {...field} control={<MaterialRadio />} label={label} />
  )
}
