import * as React from "react"
import { TUserProfile } from "../../../models/users"
import { ProfileEditableForm } from "./profile-editable-form"
import { ProfileContactUpdateForm } from "./profile-contact-update-form"

type TProps = {
  isEditing: boolean
  userProfile: TUserProfile
}

export const ProfileEditable = (props: TProps) => {
  return (
    <ProfileContactUpdateForm isEditing={props.isEditing} userProfile={props.userProfile} />
  )
}
