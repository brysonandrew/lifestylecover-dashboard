import React from "react"
import styled from "styled-components"
import { color, layoutSizes } from "../../data"
import { fromKebabCase, renderSwitch } from "../../utils"
import { Users } from "../../components"
import { Policies } from "../../components/policies"
import { Paper } from "@material-ui/core"
import { Header } from "./header"
import { Profile } from "../../components/profile"

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

type TProps = {
  userProfile: any
  activeMenuItem: string
  onUpdateUser(user: any): void
}

export const Content = (props: TProps) => {
  const { userProfile, activeMenuItem, onUpdateUser } = props
  return (
    <Wrapper>
      <Paper square={false}>
        <Header userProfile={userProfile} onUpdateUser={onUpdateUser} />
      </Paper>
      <Inner>
        {renderSwitch(fromKebabCase(activeMenuItem), {
          Profile: () => <Profile userProfile={userProfile} />,
          Users: () => <Users />,
          Policies: () => <Policies/>,
        })}
      </Inner>
    </Wrapper>
  )
}
