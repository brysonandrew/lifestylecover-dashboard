import React from "react"
import styled from "styled-components"
import { layoutSizes } from "../../../data"
import { Button, Paper } from "@material-ui/core"
import { TUserProfile } from "../../../models/users"
import { Avatar } from "./avatar"

const Wrapper = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: ${layoutSizes.nav.row}px;
`

const Inner = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 ${layoutSizes.nav.row + 24}px;
  width: 100%;
  height: 100%;
`

const RightButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
      <Inner>
        <h2>{titleText(userProfile)}</h2>
        <RightButtons>
          <Button onClick={handleLogout}>Log out</Button>
          {userProfile?.avatar?.url && (
            <Avatar
              userProfile={userProfile}
            />
          )}
        </RightButtons>
      </Inner>
    </Wrapper>
  )
}
