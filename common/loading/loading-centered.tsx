import React from "react"
import styled from "styled-components"
import { CircularProgress } from "@material-ui/core"

const Wrapper = styled.div`
  text-align: center;
  padding: 200px 0;
`

type TProps = {}

export const LoadingCentered = (props: TProps) => {
  return (
    <Wrapper>
      <CircularProgress color="primary" />
    </Wrapper>
  )
}
