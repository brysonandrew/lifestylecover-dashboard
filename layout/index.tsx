import * as React from "react"
import { MainWrapper } from "../components/main-wrapper"
import { NextRouter, withRouter } from "next/router"
import { Nav } from "./nav"
import { LayoutWrapper } from "./wrapper"
import { menuItems } from "./menu-items"
import { Content } from "./content"

export type TLayoutProps = {
  user: any
  onUpdateUser(user: any): void
  router: NextRouter
}

export const Layout = withRouter((props: TLayoutProps) => {
  const { user, router, onUpdateUser } = props
  const activeMenuItem = (router.query.activeMenuItem as string)
  const [isNavOpen, setNavOpen] = React.useState(false)
  
  const handleNavToggle = (nextIsNavOpen: boolean) => setNavOpen(nextIsNavOpen)

  return (
    <MainWrapper>
      <LayoutWrapper>
        <Content
          user={user}
          activeMenuItem={activeMenuItem}
          onUpdateUser={onUpdateUser}
        />
        <Nav
          isOpen={isNavOpen}
          onSetOpen={handleNavToggle}
          activeMenuItem={activeMenuItem}
        >
          {menuItems['Administrator']}
        </Nav>
      </LayoutWrapper>
    </MainWrapper>
  )
})
