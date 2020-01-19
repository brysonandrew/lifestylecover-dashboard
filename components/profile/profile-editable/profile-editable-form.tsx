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
import { FieldSet } from "../../../common/inputs/field-set"
import { changedValues } from "../../../utils/forms"

type TProps = {
  isEditing: boolean
  userProfile: TUserProfile
}

export const ProfileEditableForm = (props: TProps) => {
  const { isEditing, userProfile } = props
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
          return (
            <Form>
              <FieldSet isDisabled={!isEditing}>
                <ProfileEditableInputs />
              </FieldSet>
              {isEditing && (
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
                          ...changedValues(initValues, values)
                        },
                      })
                    }
                    startIcon={
                      loading
                        ? (
                          <CircularProgress size={18} color="inherit" />
                        ) : (
                          <Save />
                        )
                    }
                  >
                    Save
                  </Button>
                </ButtonWrapper>
              )}
            </Form>
          )
        }}
      </Formik>
    )
  } else {
    return null
  }
}
