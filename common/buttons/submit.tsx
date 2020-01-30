import * as React from "react"
import styled from "styled-components"
import { Button } from "@material-ui/core"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 12px;
`

export const Submit = (props: any) => {
  const { children, ...buttonProps } = props
  return (
    <Wrapper>
      <Button
        {...props}
      >
        {children}
      </Button>
    </Wrapper>
  )
}
