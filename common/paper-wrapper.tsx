import * as React from "react"
import styled from "styled-components"
import { layoutSizes } from "../data"
import { Paper } from "@material-ui/core"
import { sizes } from "../utils-viewport"

const Wrapper = styled(Paper)`
  width: 100%;
  margin: ${layoutSizes.nav.row * 0.5}px auto;
  padding: 0 12px;
  ${sizes.mobileLg`
    width: calc(100% - 80px);
  `}
`

type TProps = {
  children: React.ReactNode
}

export const PaperWrapper = (props: TProps) => {
  return <Wrapper>{props.children}</Wrapper>
}
