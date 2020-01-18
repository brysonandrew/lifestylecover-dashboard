import * as React from "react"
import styled from "styled-components"
import { useField } from "formik"
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

const TextFieldStyled = styled(MaterialTextField)`
  width: 100%;
  & input, & textarea {
    position: relative;
    font-size: 18px;
  }
  & .MuiInput-underline:after {
    border-bottom: 2px solid ${color.green};
  }
`

export const TextField: React.FC<any> = ({
  rows,
  multiline,
  label,
  placeholder,
  ...props
}) => {
  const [field, meta] = useField<{}>(props)
  const errorText = meta.error && meta.touched ? meta.error : ""
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <TextFieldStyled
        placeholder={placeholder}
        {...field}
        helperText={errorText}
        error={!!errorText}
        type={props.type || "text"}
        multiline={multiline}
        rows={rows}
      />
    </Wrapper>
  )
}
