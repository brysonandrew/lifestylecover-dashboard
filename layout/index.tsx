import * as React from "react"
import { NextRouter, withRouter } from "next/router"
import { MainWrapper } from "../components"
import { Nav } from "./nav"
import { LayoutWrapper } from "./wrapper"
import { menuItems } from "./menu-items"
import { Content } from "./content"

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
      <LayoutWrapper>
        <Content
          userProfile={userProfile}
          activeMenuItem={activeMenuItem}
          onUpdateUser={onUpdateUser}
        />
        <Nav
          isOpen={isNavOpen}
          onSetOpen={handleNavToggle}
          activeMenuItem={activeMenuItem}
        >
          {userProfile && menuItems[userProfile.role]}
        </Nav>
      </LayoutWrapper>
    </MainWrapper>
  )
})
