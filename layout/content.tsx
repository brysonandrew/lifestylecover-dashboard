import * as React from "react"
import styled from "styled-components"
import { color } from "../data"
import { LINE_H } from "./data"

const Wrapper = styled.div`
  position: absolute;
  left: ${LINE_H}px;
  top: 0;
  width: calc(100% - ${LINE_H}px);
  height: 100%;
  text-align: center;
  background-color: ${color.offWhite};
`

type TProps = {
  children: React.ReactNode
}

export const Content = (props: TProps) => {
  return (
    <Wrapper>
      <header>
        header info
      </header>
      {props.children}
    </Wrapper>
  )
}
