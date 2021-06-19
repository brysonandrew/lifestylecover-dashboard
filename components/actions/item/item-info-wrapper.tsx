import * as React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 12px;
  padding: 0 12px 12px;
`

type TProps = {
  children: React.ReactNode
}

export const ItemInfoWrapper = (props: TProps) => (
  <Wrapper>{props.children}</Wrapper>
)
