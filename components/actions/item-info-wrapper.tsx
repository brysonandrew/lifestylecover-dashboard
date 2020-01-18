import * as React from "react"
import styled from "styled-components"
import { layoutSizes } from "../../data"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - ${layoutSizes.content.button.width}px);
`

type TProps = {
  children: React.ReactNode
}

export const UserItemInfoWrapper = (props: TProps) => (
  <Wrapper>
    {props.children}
  </Wrapper>
)
