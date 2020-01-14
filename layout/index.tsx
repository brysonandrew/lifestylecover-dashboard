import * as React from "react"
import { MainWrapper } from "../components/main-wrapper"
import { NextRouter, withRouter } from "next/router"
import { Nav } from "./nav"
import { LayoutWrapper } from "./wrapper"
import { menuItems } from "./menu-items"
import { Content } from "./content"

export type TLayoutProps = {
  activeMenuItem: string
  router: NextRouter
}

export const Layout = withRouter((props: TLayoutProps) => {
  const { activeMenuItem } = props
  const [isNavOpen, setNavOpen] = React.useState(false)
  
  const handleNavToggle = (nextIsNavOpen: boolean) => setNavOpen(nextIsNavOpen)

  return (
    <MainWrapper>
      <LayoutWrapper>
        <Content
          activeMenuItem={activeMenuItem}
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
