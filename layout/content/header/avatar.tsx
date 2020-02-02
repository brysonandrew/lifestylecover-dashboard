import React from "react"
import styled from "styled-components"
import { Box } from "@material-ui/core"
import { layoutSizes } from "../../../data"
const MAX_SIZE = layoutSizes.imageSize

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`

type TProps = {
  src: string
}

export const Avatar = (props: TProps) => (
  <Box
    style={{
      borderRadius: "50%",
      overflow: "hidden",
      width: MAX_SIZE,
      height: MAX_SIZE,
    }}
    boxShadow={4}
  >
    <Img src={props.src} alt="User's avatar" />
  </Box>
)
