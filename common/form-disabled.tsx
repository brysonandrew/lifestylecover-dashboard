import * as React from "react"
import styled from "styled-components"
import { TextFieldDisabled } from "./inputs/text-field-disabled"
import { CheckboxDisabled } from "./inputs/checkbox-disabled"
import { ArrayDisabled } from "./inputs/array-disabled"
import { isBoolean, isArray } from "util"

const Wrapper = styled.div`
  text-align: left;
`

type TProps = {
  children: any
}

export const FormDisabled = (props: TProps) => {
  const { children } = props
  return (
    <Wrapper>
      {Object.keys(children).map((label: any) => {
        if (isArray(children[label])) {
          return (
            <ArrayDisabled key={label}>
              {children[label]}
            </ArrayDisabled>
          )
        } else if (isBoolean(children[label])) {
          return (
            <CheckboxDisabled key={label} isChecked={children[label] as boolean}>
              {label}
            </CheckboxDisabled>
          )
        } else {
          return (
            <TextFieldDisabled key={label} label={label}>
              {children[label]}
            </TextFieldDisabled>
          )
        }
      })}
    </Wrapper>
  )
}
