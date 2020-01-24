import * as React from "react"
import styled from "styled-components"
import { NextRouter, withRouter } from "next/router"
import { useQuery } from "@apollo/react-hooks"
import { MainWrapper } from "../components"
import { Nav } from "./nav"
import { menuItems } from "./menu-items"
import { Header, Content } from "./content"
import { VIEWER_ADMIN_QUERY, VIEWER_CLIENT_QUERY, VIEWER_ADVISOR_QUERY, formatDate } from "../utils"
import { LoadingCentered } from "../common"

const userProfileFrom = user => {
  if (user) {
    let {
      id,
      username,
      firstName,
      lastName,
      email,
      mobile,
      phone,
      address,
      dateOfBirth,
      occupationRating,
      smoker,
      roles,
    } = user
    const role = roles?.nodes[0]?.name
    console.log(dateOfBirth)
    dateOfBirth = formatDate(dateOfBirth)
    console.log(dateOfBirth)
    return {
      id,
      username,
      firstName,
      lastName,
      mobile,
      phone,
      address,
      dateOfBirth,
      occupationRating,
      smoker,
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
  const clientQuery = useQuery(VIEWER_CLIENT_QUERY, {skip: role !== 'client'});
  const advisorQuery = useQuery(VIEWER_ADVISOR_QUERY, {skip: role !== 'advisor'});
  const adminQuery = useQuery(VIEWER_ADMIN_QUERY, {skip: role !== 'administrator'});
  if (role === 'client') {
    userQuery = clientQuery
  } else if (role === 'advisor') {
    userQuery = advisorQuery
  } else if (role === 'administrator') {
    userQuery = adminQuery
  }

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
