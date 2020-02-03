import * as React from "react"
import styled from "styled-components"
import { Paper } from "@material-ui/core"
import { Error } from "@material-ui/icons"
import { sizes } from "../utils-viewport"

const Wrapper = styled(Paper)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 12px;
  ${sizes.mobileLg`
    width: calc(100% - 80px);
  `}
`

type TProps = {
  children: React.ReactNode
}

export const PaperError = (props: TProps) => {
  return (
    <Wrapper>
      <Error/>
      <div>{props.children}</div>
    </Wrapper>
  )
}
