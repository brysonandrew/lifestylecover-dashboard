import * as React from "react"
import { TUserProfile } from "../../../models"
import { useMutation } from "@apollo/react-hooks"
import { USER_UPDATE_DETAILS_MUTATION } from "../../../utils"
import { USER_DETAILS_FORM } from "../../../data-initial-values-user"
import { ProfileEditableForm } from "../profile-editable-form"
import { ProfileDetailsInputs } from "./profile-details-inputs"

type TProps = {
  userProfile: TUserProfile
}

export const ProfileDetailsUpdateForm = ({userProfile}: TProps) => (
  <ProfileEditableForm
    userProfile={userProfile}
    mutation={useMutation(USER_UPDATE_DETAILS_MUTATION)}
    initFormValues={USER_DETAILS_FORM}
  >
    <ProfileDetailsInputs />
  </ProfileEditableForm>
)
