import * as React from "react"
import styled from "styled-components"
import { Divider } from "@material-ui/core"

const Wrapper = styled(Divider)`
  background-color: rgba(0,0,0, 0.5);
`

export const ListDivider = () => {
  return <Wrapper component="li"/>
}
