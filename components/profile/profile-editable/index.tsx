import * as React from "react"
import { TUserProfile } from "../../../models/users"
import { ProfileEditableForm } from "./profile-editable-form"

type TProps = {
  isEditing: boolean
  userProfile: TUserProfile
}

export const ProfileEditable = (props: TProps) => {
  return (
    <ProfileEditableForm isEditing={props.isEditing} userProfile={props.userProfile} />
  )
}
