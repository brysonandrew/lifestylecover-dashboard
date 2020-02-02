import * as React from "react"
import { NextRouter, withRouter } from "next/router"
import { useQuery } from "@apollo/react-hooks"
import { MainWrapper } from "../components"
import { Header, Content, Nav } from "../layout"
import {
  VIEWER_ADMIN_QUERY,
  VIEWER_CLIENT_QUERY,
  VIEWER_ADVISOR_QUERY,
  createUserProfile,
} from "../utils"
import { LoadingCentered } from "../common"
import { EUserRole } from "../models"

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

  let userQuery: any = {
    loading: false,
    data: null,
    error: "Invalid user role",
  }
  const clientQuery = useQuery(VIEWER_CLIENT_QUERY, {
    skip: role !== EUserRole.client
  })
  const advisorQuery = useQuery(VIEWER_ADVISOR_QUERY, {
    skip: role !== EUserRole.advisor,
  })
  const adminQuery = useQuery(VIEWER_ADMIN_QUERY, {
    skip: role !== EUserRole.administrator,
  })
  if (role === EUserRole.client) {
    userQuery = clientQuery
  } else if (role === EUserRole.advisor) {
    userQuery = advisorQuery
  } else if (role === EUserRole.administrator) {
    userQuery = adminQuery
  }

  const handleNavToggle = (nextIsNavOpen: boolean) => setNavOpen(nextIsNavOpen)

  React.useEffect(() => {
    if (userQuery.data) {
      onUpdateUser({ user: {...user, ...userQuery.data.viewer}})
    }
  }, [userQuery.data])

  React.useEffect(() => {
    if (userQuery.error) {
      onUpdateUser(null)
    }
  }, [userQuery.error])

  if (userQuery.loading) {
    return <LoadingCentered />
  } else {
    const userProfile = createUserProfile(user)
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
          userProfile={userProfile}
        />
      </MainWrapper>
    )
  }
})

export * from './content'
export * from './nav'
