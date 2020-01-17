import * as React from "react"
import { TextField, Radio } from "../../../common/inputs"
import { FormWrapper } from "../../../common/form-wrapper"
import { TUserProfile } from "../../../models/users"
import { Formik, Form } from "formik"
import { userProfileEditableValidationSchema } from "../../../data-validation"
import { ButtonWrapper } from "../../../common/buttons/button-wrapper"
import { Button, CircularProgress } from "@material-ui/core"
import { useMutation } from "@apollo/react-hooks"
import { Save } from "@material-ui/icons"
import { ProfileEditableInputs } from "./profile-editable-inputs"
import { USER_UPDATE_MUTATION } from "../../../utils/graphql/user-update.mutation"
import { ProfileEditableForm } from "./profile-editable-form"

type TProps = {
  userProfile: TUserProfile
}

export const ProfileEditable = (props: TProps) => {
  console.log(props.userProfile)
  return (
    <div>
      <h2>Profile</h2>
      <ProfileEditableForm userProfile={props.userProfile}/>
    </div>
  )
}
