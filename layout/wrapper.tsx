import * as React from "react"
import styled from "styled-components"
import { color } from "../data"

const Wrapper = styled.div`
  position: relative;
  background-color: ${color.black};
  min-height: 100vh;
`

type TProps = {
  children: React.ReactNode
}

export const LayoutWrapper = (props: TProps) => {
  return <Wrapper>{props.children}</Wrapper>
}
