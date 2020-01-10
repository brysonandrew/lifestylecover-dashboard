import * as React from "react"
import { NextRouter, withRouter } from "next/router"
import "../styles/reset.css"
import "../styles/style.css"

export interface IIndexProps {
  width: number
  router: NextRouter
}

export default withRouter((props: IIndexProps) => {
  const { width, router } = props

  return (
    <div>index</div>
  )
})
