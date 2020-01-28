import * as React from "react"
import styled from "styled-components"
import { TextFieldText } from "./text-field-text"
import { CheckboxText } from "./checkbox-text"
import { ArrayText } from "./array-text"
import { isBoolean, isArray } from "util"

const Wrapper = styled.div`
  text-align: left;
`

type TProps = {
  children: any
  arrayInputs?: any
}

export const FormText = (props: TProps) => {
  const { children, arrayInputs } = props
  return (
    <Wrapper>
      {Object.keys(children).map((label: any) => {
        if (isArray(children[label])) {
          return (
            <ArrayText key={label} arrayInputs={arrayInputs}>
              {children[label]}
            </ArrayText>
          )
        } else if (isBoolean(children[label])) {
          return (
            <CheckboxText key={label} isChecked={children[label] as boolean}>
              {label}
            </CheckboxText>
          )
        } else {
          return (
            <TextFieldText key={label} label={label}>
              {children[label]}
            </TextFieldText>
          )
        }
      })}
    </Wrapper>
  )
}
