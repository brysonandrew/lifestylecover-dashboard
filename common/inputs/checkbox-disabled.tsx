import * as React from "react"
import styled from "styled-components"
import { CheckBox, CheckBoxOutlineBlank } from "@material-ui/icons"
import { TextFieldDisabled } from "./text-field-disabled"
import { fromKebabCase, fromCamelCase } from "../../utils"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const Text = styled.div`
  margin-right: 12px;
  line-height: 24px;
  font-size: 14px;
`

type TProps = {
  isChecked: boolean
  children: React.ReactNode
}

export const CheckboxDisabled = (props: TProps) => {
  const { children, isChecked } = props
  return (
    <TextFieldDisabled>
      <Wrapper>
        <Text>
          {fromCamelCase(children)}
        </Text>
        {isChecked ? <CheckBox /> : <CheckBoxOutlineBlank/>}
      </Wrapper>
    </TextFieldDisabled>
  )
}
