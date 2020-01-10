import * as React from "react"
import styled from "styled-components"
import { COLOR_1, COLOR_3, COLOR_6 } from "../data"

const Wrapper = styled.div`
  position: relative;
  background-color: ${COLOR_1};
  margin-top: 12px;
  padding: 12px;
  border-radius: 4px;
  color: ${COLOR_3};
  text-align: left;
  box-shadow: inset 0 0 2px 1px ${COLOR_6};
  & h2 {
    font-size: 40px;
    text-transform: capitalize;
  }
`

type TProps = {
  children: JSX.Element | JSX.Element[]
}

export const FormWrapper = (props: TProps) => {
  return <Wrapper>{props.children}</Wrapper>
}
