import React from "react"
import styled from "styled-components"
import { layoutSizes } from "../../../data"
import { Button, Paper } from "@material-ui/core"
import { TUserProfile } from "../../../models/users"
import { ProfilePictureUpload } from "./profile-picture-upload"
import { userName } from "../../../utils"
import { sizes } from "../../../utils-viewport"

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
  padding: 0 0 0 6px;
  width: 100%;
  height: 100%;
  ${sizes.mobileLg`
    padding: 0 0 0 ${layoutSizes.nav.row + 24}px;
  `}
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

export const Header = (props: TProps) => {
  const { userProfile, onUpdateUser } = props
  const handleLogout = () => {
    onUpdateUser(null)
  }
  const text = userName(userProfile)
  return (
    <Wrapper>
      <Inner>
        <h2>{text ? `Hi there, ${text}` : "Welcome"}</h2>
        <RightButtons>
          <Button onClick={handleLogout}>Log out</Button>
          {userProfile?.avatar?.url && (
            <ProfilePictureUpload userProfile={userProfile} />
          )}
        </RightButtons>
      </Inner>
    </Wrapper>
  )
}

export * from "./profile-picture"
export * from "./profile-picture-upload"
