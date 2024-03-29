import React from "react"
import { NextRouter } from "next/router"
import { Login } from "../components"
import { useLazyQuery } from "@apollo/react-hooks"
import { VIEWER_INIT_QUERY } from "../utils"
import { isBrowser, store } from '../utils';
import { AUTH_TOKEN_KEY } from '../data';
import { LoadingCentered } from "../common"
import { Layout } from "../layout"
import { USER_FIXTURE } from "../data-initial-values-user"

export type TIndexProps = {
  user: any
  router: NextRouter
  onUpdateUser(userConfig: any): void
}

export default (props: TIndexProps) => {
  const { user, router, onUpdateUser } = props
  const activeMenuItem = (router.query.activeMenuItem as string)
  const [getViewerInit, viewerInit] = useLazyQuery(
    VIEWER_INIT_QUERY,
    {}
  );

  React.useEffect(() => {
    if (isBrowser && !viewerInit.called) {
      const token = store(AUTH_TOKEN_KEY)
      if (token) {
        getViewerInit()
      }
    }
  }, [])

  React.useEffect(() => {
    if (!viewerInit.loading && viewerInit.data) {
      onUpdateUser({user: viewerInit.data.viewer})
    }
  }, [viewerInit.loading])

  React.useEffect(() => {
    if (viewerInit.error) {
      onUpdateUser(null)
    }
  }, [viewerInit.error])
  // return (
  //   <Layout
  //     {...props}
  //     user={USER_FIXTURE}
  //   />
  // )
  if (activeMenuItem) {
    if (!user || viewerInit.loading) {
      return (
        <LoadingCentered/>
      )
    } else {
      return (
        <Layout
          {...props}
        />
      )
    }
  } else {
    return (
      <Login router={router} onUpdateUser={onUpdateUser}/>
    )
  }
}
