import React from "react"
import styled from "styled-components"
import { color, layoutSizes } from "../../data"
import { fromKebabCase, renderSwitch } from "../../utils"
import { Users, Profile, Policies } from "../../components"

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  left: ${layoutSizes.nav.row}px;
  min-height: 100vh;
  height: 100%;
  width: calc(100% - ${layoutSizes.nav.row}px);
`

const DARK_PADDING = 6
const Inner = styled.div`
  position: absolute;
  left: ${DARK_PADDING}px;
  top: ${layoutSizes.nav.row + DARK_PADDING}px;
  width: calc(100% - ${DARK_PADDING * 2}px);
  min-height: calc(100% - ${layoutSizes.nav.row + DARK_PADDING * 2}px);
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
      <Inner>
        {renderSwitch(fromKebabCase(activeMenuItem), {
          Profile: () => <Profile userProfile={userProfile} />,
          Users: () => <Users />,
          Policies: () => <Policies userProfile={userProfile} />,
        })}
      </Inner>
    </Wrapper>
  )
}

export * from "./header"
