import * as React from "react"
import { useMutation } from "@apollo/react-hooks"
import { USER_UPDATE_CONTACT_MUTATION } from "../../../utils"
import { USER_CONTACT_FORM } from "../../../data-initial-values"
import { ProfileEditableForm } from "../profile-editable-form"
import { TUserProfile } from "../../../models"
import { ProfileContactInputs } from "./profile-contact-inputs"

type TProps = {
  userProfile: TUserProfile
}

export const ProfileContactUpdateForm = (props: TProps) => (
  <ProfileEditableForm
    userProfile={props.userProfile}
    mutation={useMutation(USER_UPDATE_CONTACT_MUTATION)}
    initFormValues={USER_CONTACT_FORM}
  >
    <ProfileContactInputs />
  </ProfileEditableForm>
)
