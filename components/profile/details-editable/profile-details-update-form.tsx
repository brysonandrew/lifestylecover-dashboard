import * as React from "react"
import { TUserProfile, EInputType } from "../../../models"
import { useMutation } from "@apollo/react-hooks"
import { USER_UPDATE_DETAILS_MUTATION } from "../../../utils"
import { USER_DETAILS_FORM } from "../../../data-initial-values"
import { ProfileEditableForm } from "../profile-editable-form"

type TProps = {
  isEditing: boolean
  userProfile: TUserProfile
}

export const ProfileDetailsUpdateForm = (props: TProps) => (
  <ProfileEditableForm
    {...props}
    mutation={useMutation(USER_UPDATE_DETAILS_MUTATION)}
    initFormValues={USER_DETAILS_FORM}
    inputType={EInputType.Details}
  />
)
