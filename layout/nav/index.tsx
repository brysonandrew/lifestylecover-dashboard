import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { color, TRANSITION_LINEAR_CONFIG, layoutSizes } from "../../data"
import { NavToggle } from "./nav-toggle"
import { NavList } from "./nav-list"
import { TUserProfile, EUserRole } from "../../models"
import { STATIC_MENU_ITEMS } from "../menu-items"

const menuItems = (userProfile: TUserProfile) => {
  let items = STATIC_MENU_ITEMS[userProfile.role]
  Object.keys(userProfile).forEach((key) => {
    if (key === 'policyRisk') {
      items.push('ClientPolicyRisk')
    }
    if (key === 'policyAsset') {
      items.push('ClientPolicyAsset')
    }
    if (key === 'policyKiwisaver') {
      items.push('ClientPolicyKiwisaver')
    }
    if (key === 'policyPet') {
      items.push('ClientPolicyPet')
    }
  })
  return items
}

const Wrapper = styled(motion.nav)`
  position: fixed;
  left: 0;
  top: 0;
  width: ${layoutSizes.nav.row}px;
  color: ${color.white};
  height: 100%;
`

type TProps = {
  isOpen: boolean
  activeMenuItem: string
  userProfile: TUserProfile
  onSetOpen(isOpen: boolean): void
}

export const Nav = (props: TProps) => {
  const { isOpen, activeMenuItem, onSetOpen, userProfile } = props
  return (
    <Wrapper
      animate={{ width: isOpen ? layoutSizes.nav.width : layoutSizes.nav.row }}
      transition={TRANSITION_LINEAR_CONFIG}
    >
      <NavToggle isOpen={isOpen} onSetOpen={onSetOpen} />
      {userProfile && (
        <NavList
          activeMenuItem={activeMenuItem}
          onSetOpen={onSetOpen}
        >
          {menuItems(userProfile)}
        </NavList>
      )}
    </Wrapper>
  )
}
