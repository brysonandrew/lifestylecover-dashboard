import * as React from "react"
import styled from "styled-components"
import { useField, FieldAttributes } from "formik"
import { TextField as MaterialTextField } from "@material-ui/core"

const Label = styled.div`
  margin-top: 12px;
  font-size: 14px;
`

const MaterialTextFieldStyled = styled(MaterialTextField)`
  width: 100%;
  & input[type="text"] {
    position: relative;
    font-size: 40px;
  }
`

export type TTextFieldProps = { label?: string } & FieldAttributes<{}>

export const TextField: React.FC<TTextFieldProps> = ({
  label,
  placeholder,
  ...props
}) => {
  const [field, meta] = useField<{}>(props)
  const errorText = meta.error && meta.touched ? meta.error : ""
  return (
    <div>
      {label && <Label>{label}</Label>}
      <MaterialTextFieldStyled
        placeholder={placeholder}
        {...field}
        helperText={errorText}
        error={!!errorText}
        type={props.type || "text"}
      />
    </div>
  )
}
