import * as React from "react"
import styled from "styled-components"
import { useField, FieldAttributes } from "formik"
import { TextField as MaterialTextField } from "@material-ui/core"
import { color } from "../../data"

const Wrapper = styled.div`
  margin-top: 12px;
  &:first-child {
    margin-top: 0;
  }
`

const Label = styled.div`
  font-size: 14px;
`

const MaterialTextFieldStyled = styled(MaterialTextField)`
  width: 100%;
  & input[type="text"], & input[type="password"] {
    position: relative;
    font-size: 40px;
  }
  & .MuiInput-underline:after {
    border-bottom: 2px solid ${color.green};
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
    <Wrapper>
      {label && <Label>{label}</Label>}
      <MaterialTextFieldStyled
        placeholder={placeholder}
        {...field}
        helperText={errorText}
        error={!!errorText}
        type={props.type || "text"}
      />
    </Wrapper>
  )
}
