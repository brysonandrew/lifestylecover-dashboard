import * as React from "react"
import { useMutation } from "@apollo/react-hooks"
import { USER_UPDATE_CONTACT_MUTATION } from "../../../utils"
import { USER_CONTACT_FORM } from "../../../data-initial-values-user"
import { ProfileEditableForm } from "../profile-editable-form"
import { TUserProfile } from "../../../models"
import { ProfileContactInputs } from "./profile-contact-inputs"

type TProps = {
  userContact: TUserProfile
  refetch(): any
}

export const ProfileContactUpdateForm = ({userContact, refetch}: TProps) => (
  <ProfileEditableForm
    userProfile={userContact}
    mutation={useMutation(USER_UPDATE_CONTACT_MUTATION)}
    refetch={refetch}
    initFormValues={USER_CONTACT_FORM}
  >
    <ProfileContactInputs />
  </ProfileEditableForm>
)
