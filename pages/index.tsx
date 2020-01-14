import React from "react"
import { NextRouter, withRouter } from "next/router"
import { Login } from "../components"
import { Layout } from "../layout"

export type TIndexProps = {
  width: number
  router: NextRouter
}

export default withRouter((props: TIndexProps) => {
  const activeMenuItem = (props.router.query.activeMenuItem as string)

  if (activeMenuItem) {
    return (
      <Layout activeMenuItem={activeMenuItem} {...props}/>
    )
  } else {
    return (
      <Login router={props.router}/>
    )
  }
})
