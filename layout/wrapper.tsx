import * as React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`

type TProps = {
  children: React.ReactNode
}

export const LayoutWrapper = (props: TProps) => {
  return <Wrapper>{props.children}</Wrapper>
}
