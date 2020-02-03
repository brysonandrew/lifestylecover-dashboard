import React from "react"
import styled from "styled-components"
import { Box, Avatar } from "@material-ui/core"
import { layoutSizes } from "../../../data"
import { MENU_ITEM_ICONS } from "../../../data-menu-items"
import { defined } from "../../../utils"
const MAX_SIZE = layoutSizes.imageSize

const Wrapper = styled(Box)`
  border-radius: 50%;
  overflow: hidden;
  width: ${MAX_SIZE}px;
  height: ${MAX_SIZE}px;
  & svg {
    width: ${MAX_SIZE}px;
    height: ${MAX_SIZE}px;
  }
`

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`

type TProps = {
  src: string
  usersFirstLetterName?: string
  boxShadow?: number
}

export const ProfilePicture = (props: TProps) => (
  <Wrapper boxShadow={defined(props.boxShadow) ? props.boxShadow : 4}>
    {props.src ? (
      <Img src={props.src} alt="User's avatar" />
    ) : props.usersFirstLetterName ? (
      <Avatar>{props.usersFirstLetterName.toUpperCase()}</Avatar>
    ) : (
      MENU_ITEM_ICONS.Profile
    )}
  </Wrapper>
)
