import * as React from "react"
import styled from "styled-components"
import { TextFieldDisabled } from "./inputs/text-field-disabled"
import { CheckboxDisabled } from "./inputs/checkbox-disabled"

const Wrapper = styled.div`
  text-align: left;
`

type TProps = {
  children: Record<string, string | boolean>
}

export const FormDisabled = (props: TProps) => {
  const { children } = props
  return (
    <Wrapper>
      {Object.keys(children).map((label: string) => {
        if (typeof children[label] === 'boolean') {
          return (
            <CheckboxDisabled isChecked={children[label] as boolean} key={label}>
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
