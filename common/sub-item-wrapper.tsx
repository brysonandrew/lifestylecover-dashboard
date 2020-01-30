import * as React from "react"
import styled from "styled-components"
import { Card } from "@material-ui/core"

const Wrapper = styled(Card)`
  padding: 8px;
  margin-top: 12px;
  background-color: #9e9e9e;
  &:first-child {
    margin-top: 0;
  }
`

type TProps = {
  children: React.ReactNode
} & any

export const SubItemWrapper = (props: TProps) => {
  const { children, ...materialUiConfig } = props
  return <Wrapper {...materialUiConfig}>{props.children}</Wrapper>
}
