import React from "react"
import styled from "styled-components"
import { color, layoutSizes } from "../../data"
import { fromKebabCase, renderSwitch } from "../../utils"
import { Users, Profile, PolicyAll } from "../../components"
import { EMenuItem } from "../../models/layout"
import { PolicyClientAsset } from "../../components/policy/policy-client-asset"
import { PolicyClientRisk } from "../../components/policy/policy-client-risk"
import { PolicyClientPet } from "../../components/policy/policy-client-pet"
import { PolicyClientKiwisaver } from "../../components/policy/policy-client-kiwisaver"

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
          [EMenuItem.Profile]: () => <Profile userProfile={userProfile} />,
          [EMenuItem.Users]: () => <Users userProfile={userProfile} />,
          [EMenuItem.PoliciesAll]: () => <PolicyAll userProfile={userProfile} />,
          [EMenuItem.PolicyAsset]: () => <PolicyClientAsset userProfile={userProfile}/>,
          [EMenuItem.PolicyRisk]: () => <PolicyClientRisk userProfile={userProfile}/>,
          [EMenuItem.PolicyPet]: () => <PolicyClientPet userProfile={userProfile}/>,
          [EMenuItem.PolicyKiwisaver]: () => <PolicyClientKiwisaver userProfile={userProfile}/>
        })}
      </Inner>
    </Wrapper>
  )
}

export * from "./header"
