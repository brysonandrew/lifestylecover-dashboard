import * as React from "react"
import styled from "styled-components"
import { NextRouter, withRouter } from "next/router"
import { MainWrapper } from "../components"
import { Nav } from "./nav"
import { menuItems } from "./menu-items"
import { Content } from "./content"
import { Paper } from "@material-ui/core"
import { Header } from "./content/header"
import { useLazyQuery, useQuery } from "@apollo/react-hooks"
import { VIEWER_ADMIN_QUERY, VIEWER_CLIENT_QUERY, VIEWER_ADVISOR_QUERY } from "../utils"
import { LoadingCentered } from "../common"
import { ApolloQueryResult } from "apollo-client"

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

  const role = user.roles?.nodes[0]?.name

  let userQuery: any = {loading: false, data: null, error: 'Invalid user role'}
  userQuery = useQuery(VIEWER_CLIENT_QUERY, {skip: role !== 'client'});
  userQuery = useQuery(VIEWER_ADVISOR_QUERY, {skip: role !== 'advisor'});
  userQuery = useQuery(VIEWER_ADMIN_QUERY, {skip: role !== 'administrator'});

  console.log(userQuery.loading)
  console.log(userQuery.data)

  const handleNavToggle = (nextIsNavOpen: boolean) => setNavOpen(nextIsNavOpen)

  React.useEffect(() => {
    if (userQuery.data) {
      onUpdateUser({user: userQuery.data.viewer})
    }
  }, [userQuery.data])

  React.useEffect(() => {
    if (userQuery.error) {
      onUpdateUser(null)
    }
  }, [userQuery.error])

  if (userQuery.loading) {
    return (
      <LoadingCentered/>
    )
  } else {
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
  }
})
