import * as React from "react"
import styled from "styled-components"
import { color } from "../data"
import { LINE_S } from "./data"
import { fromKebabCase } from "../utils"
import { menuItemContent } from "./menu-items"

const Wrapper = styled.div`
  position: absolute;
  left: ${LINE_S}px;
  top: 0;
  width: calc(100% - ${LINE_S}px);
  height: 100%;
  text-align: center;
  background-color: ${color.offWhite};
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${LINE_S}px;
  background-color: ${color.lightGrey};
`

type TProps = {
  activeMenuItem: string
}

export const Content = (props: TProps) => {
  const { activeMenuItem } = props
  const title = fromKebabCase(activeMenuItem)
  return (
    <Wrapper>
      <Header>
        <h2>{title}</h2>
      </Header>
      {menuItemContent['Administrator'][title]}
    </Wrapper>
  )
}
