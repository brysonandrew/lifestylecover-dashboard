import * as React from "react"
import styled from "styled-components"
import { CheckBox, CheckBoxOutlineBlank } from "@material-ui/icons"
import { TextFieldText } from "./text-field-text"
import { fromCamelCase } from "../../utils"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
`

const Text = styled.div`
  margin-right: 12px;
  line-height: 24px;
`

const CheckedText = styled.div`
  font-weight: bold;
`

type TProps = {
  isChecked: boolean
  children: React.ReactNode
}

export const CheckboxText = (props: TProps) => {
  const { children, isChecked } = props
  return (
    <TextFieldText>
      <Wrapper>
        <Text>
          {fromCamelCase(children)}
        </Text>
        <CheckedText>
          {isChecked
            ? "Yes"
            : "No"}
        </CheckedText>
      </Wrapper>
    </TextFieldText>
  )
}
