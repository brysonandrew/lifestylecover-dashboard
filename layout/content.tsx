import React from "react"
import styled from "styled-components"
import { color, layoutSizes, GRADIENT } from "../data"
import { fromKebabCase, renderSwitch } from "../utils"
import { Users } from "../components"
import { Policies } from "../components/policies"
import { Button, Paper } from "@material-ui/core"

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: ${color.darkGreen};
`
const DARK_PADDING = 6
const Inner = styled.div`
  position: absolute;
  left: ${layoutSizes.nav.row + DARK_PADDING}px;
  top: ${layoutSizes.nav.row + DARK_PADDING}px;
  width: calc(100% - ${layoutSizes.nav.row + DARK_PADDING * 2}px);
  height: calc(100% - ${layoutSizes.nav.row + DARK_PADDING * 2}px);
  background-color: ${color.lightCyan};
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px 0 ${layoutSizes.nav.row + 24}px;
  width: 100%;
  height: ${layoutSizes.nav.row}px;
  background-color: ${color.white};
`

type TProps = {
  activeMenuItem: string
}

export const Content = (props: TProps) => {
  const { activeMenuItem } = props
  const title = fromKebabCase(activeMenuItem)
  return (
    <Wrapper>
      <Paper square={false}>
        <Header>
          <h2>Hi there, Andrew</h2>
          <Button>
            Logout
        </Button>
        </Header>
      </Paper>
      <Inner>
        {renderSwitch(fromKebabCase(activeMenuItem), {
          'Users': () => (
            <Users />
          ),
          'Policies': () => (
            <Policies />
          )
        })}
      </Inner>
    </Wrapper>
  )
}
