import * as React from "react"
import { TUserProfile } from "../../../models/users"
import { useMutation } from "@apollo/react-hooks"
import { USER_UPDATE_CONTACT_MUTATION } from "../../../utils/graphql/user/user-update-contact.mutation"
import { USER_CONTACT_FORM } from "../../../data-initial-values"
import { ProfileEditableForm } from "./profile-editable-form"

type TProps = {
  isEditing: boolean
  userProfile: TUserProfile
}

export const ProfileContactUpdateForm = (props: TProps) => (
  <ProfileEditableForm
    {...props}
    mutation={useMutation(USER_UPDATE_CONTACT_MUTATION)}
    initFormValues={USER_CONTACT_FORM}
  />
)