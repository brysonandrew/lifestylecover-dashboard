import React from "react"
import styled from "styled-components"
import { color, layoutSizes } from "../../data"
import { Button } from "@material-ui/core"
import { renderSwitch } from "../../utils"
import { TUserProfile } from "../../models/users"

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px 0 ${layoutSizes.nav.row + 24}px;
  width: 100%;
  height: ${layoutSizes.nav.row}px;
  background-color: ${color.white};
`

type TProps = {
  userProfile: TUserProfile
  onUpdateUser(user: any): void
}

const titleText = (userProfile: TUserProfile) => {
  if (userProfile) {
    const { username, firstName, lastName } = userProfile
    if (firstName) {
      if (firstName && lastName) {
        return `Hi there, ${firstName} ${lastName}`
      } else {
        return `Hi there, ${firstName}`
      }
    } else {
      return `Hi there, ${username}`
    }
  } else {
    return "Hi there!"
  }
}

export const Header = (props: TProps) => {
  const { userProfile, onUpdateUser } = props
  const handleLogout = () => {
    onUpdateUser(null)
  }
  return (
    <Wrapper>
      <h2>{titleText(userProfile)}</h2>
      <Button onClick={handleLogout}>Logout</Button>
    </Wrapper>
  )
}
