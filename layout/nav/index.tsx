import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { color, TRANSITION_LINEAR_CONFIG, layoutSizes, TRANSITION_SPRING_CONFIG } from "../../data"
import { NavToggle } from "./nav-toggle"
import { NavList } from "./nav-list"
import { TUserProfile, EMenuItem, EPolicyFetchKey } from "../../models"
import { STATIC_MENU_ITEMS } from "../../data-menu-items"
import { sizes } from "../../utils-viewport"

const menuItems = (userProfile: TUserProfile) => {
  let items = []
  Object.keys(userProfile).forEach((key) => {
    if (userProfile[key]?.edges?.length > 0) {
      if (key === EPolicyFetchKey.policiesRisk) {
        items = [...items, EMenuItem.PolicyRisk]
      }
      if (key === EPolicyFetchKey.policiesAsset) {
        items = [...items, EMenuItem.PolicyAsset]
      }
      if (key === EPolicyFetchKey.policiesKiwisaver) {
        items = [...items, EMenuItem.PolicyKiwisaver]
      }
      if (key === EPolicyFetchKey.policiesPet) {
        items = [...items, EMenuItem.PolicyPet]
      }
    }
  })
  return [...STATIC_MENU_ITEMS[userProfile.role], ...items]
}

const WrapperDesktop = styled(motion.nav)`
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: ${layoutSizes.nav.row}px;
  color: ${color.white};
  ${sizes.mobileLg`
    display: block;
  `}
`

const WrapperMobile = styled.nav`
  display: block;
  position: fixed;
  left: 0;
  bottom: 0;
  height: ${layoutSizes.nav.rowMobile}px;
  width: 100%;
  color: ${color.white};
  ${sizes.mobileLg`
    display: none;
  `}
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
    <>
      <WrapperDesktop
        animate={{ width: isOpen ? layoutSizes.nav.width : layoutSizes.nav.row }}
        transition={TRANSITION_SPRING_CONFIG}
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
      </WrapperDesktop>
      <WrapperMobile>
        {userProfile && (
          <NavList
            activeMenuItem={activeMenuItem}
            onSetOpen={onSetOpen}
          >
            {menuItems(userProfile)}
          </NavList>
        )}
      </WrapperMobile>
    </>
  )
}
