import * as React from "react"
import styled from "styled-components"
import { layoutSizes } from "../../data"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - ${layoutSizes.content.button.width}px);
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${layoutSizes.content.button.height}px;
  padding: 0 8px;
  width: 100%;
`

type TProps = {
  userInfo?: any
  children: React.ReactNode
}

export const UserItemInfoWrapper = (props: TProps) => (
  <Wrapper>
    {props.children}
  </Wrapper>
)
