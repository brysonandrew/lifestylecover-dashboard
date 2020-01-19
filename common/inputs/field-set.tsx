import * as React from "react"
import styled from "styled-components"

const Wrapper = styled.fieldset`
  text-align: left;
  &&:disabled div.MuiInput-underline:before {
    border-bottom: 1px solid currentColor;
  }
  && input, && textarea {
    cursor: text;
  }
`

type TValueProps = {
  isDisabled: boolean
  children: React.ReactNode
}

export const FieldSet = ({ isDisabled, children }: TValueProps) => (
  <Wrapper disabled={isDisabled}>
    {children}
  </Wrapper>
)
