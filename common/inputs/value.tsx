import * as React from "react"
import styled from "styled-components"
import { TextField } from "../inputs"
import { TTextFieldProps } from "../../models/inputs"

const Wrapper = styled.div`
  margin-top: 28px;
`

type TValueProps = {
  value: TTextFieldProps
}

export const Value = ({ value }: TValueProps) => (
  <Wrapper>
    <TextField {...value} />
  </Wrapper>
)
