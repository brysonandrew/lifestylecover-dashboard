import * as React from "react"
import styled from "styled-components"

const Wrapper = styled.fieldset`
  text-align: left;
  && input[type="text"], && input[type="password"], && textarea {
    cursor: text;
  }
  && input[type="checkbox"] {
    cursor: pointer
  }
  &&:disabled {
    div.MuiInput-underline:before {
      border-bottom: 1px solid currentColor;
    }
    span:hover {
      background-color: transparent
    }
    && input, && textarea {
      cursor: default
    }
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
