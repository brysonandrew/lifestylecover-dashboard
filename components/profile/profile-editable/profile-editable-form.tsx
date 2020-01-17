import * as React from "react"
import { TUserProfile } from "../../../models/users"
import { Formik, Form } from "formik"
import { userProfileEditableValidationSchema } from "../../../data-validation"
import { ButtonWrapper } from "../../../common/buttons/button-wrapper"
import { Button, CircularProgress } from "@material-ui/core"
import { useMutation } from "@apollo/react-hooks"
import { Save } from "@material-ui/icons"
import { ProfileEditableInputs } from "./profile-editable-inputs"
import { USER_UPDATE_MUTATION } from "../../../utils/graphql/user-update.mutation"
import { USER_PROFILE } from "../../../data-initial-values"

type TProps = {
  userProfile: TUserProfile
}

export const ProfileEditableForm = (props: TProps) => {
  const { userProfile } = props
  const [handleUpdateUser, mutationResult] = useMutation(USER_UPDATE_MUTATION)
  const { loading, error, data } = mutationResult

  if (userProfile) {
    let initValues = USER_PROFILE
    Object.keys(USER_PROFILE).forEach(key => {
      initValues[key] = userProfile[key] || USER_PROFILE[key]
    })
    return (
      <Formik
        validateOnChange={true}
        initialValues={initValues}
        validationSchema={userProfileEditableValidationSchema}
        onSubmit={null}
      >
        {({ values }) => {
          const { mobile, phone, address, email, firstName, lastName } = values
          console.log(email)
          return (
            <Form>
              <ProfileEditableInputs />
              <ButtonWrapper>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                  disabled={loading}
                  onClick={() =>
                    handleUpdateUser({
                      variables: {
                        id: userProfile.id,
                        email,
                        mobile,
                        phone,
                        address,
                      },
                    })
                  }
                  startIcon={
                    loading ? (
                      <CircularProgress size={18} color="inherit" />
                    ) : (
                      <Save />
                    )
                  }
                >
                  Save
                </Button>
              </ButtonWrapper>
            </Form>
          )
        }}
      </Formik>
    )
  } else {
    return null
  }
}
