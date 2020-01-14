import React from "react"
import styled from "styled-components"
import { CircularProgress } from "@material-ui/core"
import { color } from "../../data"

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

type TProps = {}

export const LoadingCentered = (props: TProps) => {
  return (
    <Wrapper>
      <CircularProgress color="primary" />
    </Wrapper>
  )
}
