import React, { ReactNode } from "react"
import { NextRouter } from "next/router"
import { Login } from "../components"
import { Layout } from "../layout"
import { useLazyQuery } from "@apollo/react-hooks"
import { USER_GET_VIEWER_QUERY } from "../utils/graphql/user-get-viewer.query"
import { isBrowser, store } from '../utils';
import { AUTH_TOKEN_KEY } from '../data';
import { LoadingCentered } from "../common"

export type TIndexProps = {
  user: any
  router: NextRouter
  onUpdateUser(userConfig: any): void
}

export default (props: TIndexProps) => {
  const { user, router, onUpdateUser } = props
  const activeMenuItem = (router.query.activeMenuItem as string)
  const [getViewer, { called, loading, error, data }] = useLazyQuery(
    USER_GET_VIEWER_QUERY,
    {}
  );

  React.useEffect(() => {
    if (isBrowser && !called) {
      const token = store(AUTH_TOKEN_KEY)
      if (token) {
        getViewer()
      }
    }
  }, [])

  React.useEffect(() => {
    if (data) {
      onUpdateUser({user: data.viewer})
    }
  }, [data])

  React.useEffect(() => {
    if (error) {
      onUpdateUser(null)
    }
  }, [error])

  if (activeMenuItem) {
    if (!user || loading) {
      return (
        <LoadingCentered/>
      )
    } else {
      return (
        <Layout {...props}/>
      )
    }
  } else {
    return (
      <Login router={router} onUpdateUser={onUpdateUser}/>
    )
  }
}
