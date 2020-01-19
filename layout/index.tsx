import * as React from "react"
import styled from "styled-components"
import { NextRouter, withRouter } from "next/router"
import { MainWrapper } from "../components"
import { Nav } from "./nav"
import { menuItems } from "./menu-items"
import { Content } from "./content"
import { Paper } from "@material-ui/core"
import { Header } from "./content/header"

const HeaderAndNav = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
`

const userProfileFrom = user => {
  if (user) {
    const {
      id,
      username,
      firstName,
      lastName,
      email,
      mobile,
      phone,
      address,
      roles,
    } = user
    const role = roles?.nodes[0]?.name
    return {
      id,
      username,
      firstName,
      lastName,
      mobile,
      phone,
      address,
      email,
      role,
    }
  } else {
    return null
  }
}

export type TLayoutProps = {
  user: any
  onUpdateUser(user: any): void
  router: NextRouter
}

export const Layout = withRouter((props: TLayoutProps) => {
  const { user, router, onUpdateUser } = props
  const activeMenuItem = router.query.activeMenuItem as string
  const [isNavOpen, setNavOpen] = React.useState(false)

  const handleNavToggle = (nextIsNavOpen: boolean) => setNavOpen(nextIsNavOpen)

  const userProfile = userProfileFrom(user)

  return (
    <MainWrapper>
      <Content
        userProfile={userProfile}
        activeMenuItem={activeMenuItem}
        onUpdateUser={onUpdateUser}
      />
      <Header userProfile={userProfile} onUpdateUser={onUpdateUser} />
      <Nav
        isOpen={isNavOpen}
        onSetOpen={handleNavToggle}
        activeMenuItem={activeMenuItem}
      >
        {userProfile && menuItems[userProfile.role]}
      </Nav>
    </MainWrapper>
  )
})
