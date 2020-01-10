import * as React from "react"
import styled from "styled-components"
import { TextField, TTextFieldProps } from "../inputs"

const Wrapper = styled.div`
  margin-top: 28px;
`

const Item = styled.div`
  && {
    & input {
      font-size: 16px;
    }
  }
`

type TNameValueProps = {
  name: TTextFieldProps
  value: TTextFieldProps
}

export const NameValue = ({ name, value }: TNameValueProps) => (
  <Wrapper>
    <Item>
      <TextField {...name} />
    </Item>
    <TextField {...value} />
  </Wrapper>
)
