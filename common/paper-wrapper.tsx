import * as React from "react"
import styled from "styled-components"
import { layoutSizes } from "../data"
import { Paper } from "@material-ui/core"

const Wrapper = styled(Paper)`
  width: calc(100% - 80px);
  margin: ${layoutSizes.nav.row * 0.5}px auto;
  padding: 0 12px;
`

type TProps = {
  children: React.ReactNode
}

export const PaperWrapper = (props: TProps) => {
  return <Wrapper>{props.children}</Wrapper>
}
