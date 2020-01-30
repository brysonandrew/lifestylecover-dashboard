import * as React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 12px 0;
`

type TProps = {
  children?: string
}

export const NoneFound = (props: TProps) => (
  <Wrapper>
    {props.children || 'No items found.'}
  </Wrapper>
)
