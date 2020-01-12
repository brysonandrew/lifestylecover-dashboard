import * as React from "react"
import styled from "styled-components"
import { color } from "../data"

const Wrapper = styled.div`
  position: relative;
  background-color: ${color.offWhite};
  margin-top: 12px;
  padding: 12px;
  border-radius: 4px;
  color: ${color.black};
  text-align: left;
  box-shadow: inset 0 0 2px 1px ${color.black};
  & h2 {
    font-size: 40px;
    text-transform: capitalize;
  }
`

type TProps = {
  children: React.ReactNode
}

export const FormWrapper = (props: TProps) => {
  return <Wrapper>{props.children}</Wrapper>
}
