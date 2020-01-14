import React from "react"
import styled from "styled-components"
import { color, layoutSizes } from "../data"
import { fromKebabCase, renderSwitch } from "../utils"
import { Users } from "../components"
import { Policies } from "../components/policies"

const Wrapper = styled.div`
  position: absolute;
  left: ${layoutSizes.nav.row}px;
  top: 0;
  width: calc(100% - ${layoutSizes.nav.row}px);
  height: 100%;
  text-align: center;
  background-color: ${color.grey};
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${layoutSizes.nav.row}px;
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
      {renderSwitch(fromKebabCase(activeMenuItem), {
        'Users': () => (
          <Users/>
        ),
        'Policies': () => (
          <Policies/>
        )
      })}
    </Wrapper>
  )
}
