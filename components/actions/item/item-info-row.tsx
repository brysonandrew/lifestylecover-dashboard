import * as React from "react"
import styled from "styled-components"
import { layoutSizes } from "../../../data"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${layoutSizes.content.button.height}px;
  padding: 0 8px;
  width: 100%;
`

type TProps = {
  children: React.ReactNode
}

export const UserItemInfoRow = (props: TProps) => (
  <Wrapper>{props.children}</Wrapper>
)
