import * as React from "react"
import { TUserProfile, TUserClientDetails } from "../../../models"
import { useMutation } from "@apollo/react-hooks"
import { USER_UPDATE_DETAILS_MUTATION } from "../../../utils"
import { USER_DETAILS_FORM } from "../../../data-initial-values-user"
import { ProfileEditableForm } from "../profile-editable-form"
import { ProfileDetailsInputs } from "./profile-details-inputs"

type TProps = {
  userClientDetails: TUserClientDetails
  refetch(): void
}

export const ProfileDetailsUpdateForm = ({userClientDetails, refetch}: TProps) => (
  <ProfileEditableForm
    userProfile={userClientDetails}
    refetch={refetch}
    mutation={useMutation(USER_UPDATE_DETAILS_MUTATION)}
    initFormValues={USER_DETAILS_FORM}
  >
    <ProfileDetailsInputs />
  </ProfileEditableForm>
)
