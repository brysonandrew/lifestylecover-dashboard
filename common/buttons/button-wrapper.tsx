import * as React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
`

export const ButtonWrapper = props => (
  <Wrapper>
    {props.children}
  </Wrapper>
)