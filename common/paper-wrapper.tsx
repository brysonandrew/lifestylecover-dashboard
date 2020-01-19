import * as React from "react"
import styled from "styled-components"
import { layoutSizes } from "../data"
import { Paper } from "@material-ui/core"

const Wrapper = styled(Paper)`
  width: calc(100% - 80px);
  margin: ${layoutSizes.nav.row}px auto;
  padding: 12px;
`

type TProps = {
  children: React.ReactNode
}

export const PaperWrapper = (props: TProps) => {
  return <Wrapper>{props.children}</Wrapper>
}
