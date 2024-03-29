import * as React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 12px 0;
`

type TProps = {}

export const PolicyNoneFound = (props: TProps) => (
  <Wrapper>
    No policies found.
  </Wrapper>
)
