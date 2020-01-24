import * as React from "react"
import { Formik, Form } from "formik"
import { userProfileEditableValidationSchema } from "../../data-validation"
import { Button, CircularProgress } from "@material-ui/core"
import { Save } from "@material-ui/icons"
import { ProfileDetailsInputs } from "./details-editable/profile-details-inputs"
import { FieldSet, ButtonWrapper } from "../../common"
import { EInputType } from "../../models"
import { renderSwitch, changedValues } from "../../utils"
import { ProfileContactInputs } from "./contact-editable/profile-contact-inputs"
import { TUserProfile } from "../../models/users"

type TProps = {
  isEditing: boolean
  userProfile: TUserProfile
  mutation: any
  initFormValues: any
  inputType: EInputType
}

export const ProfileEditableForm = (props: TProps) => {
  const { isEditing, userProfile, mutation, initFormValues, inputType } = props
  const [handleUpdateUser, mutationResult] = mutation
  const { loading, error, data } = mutationResult
  console.log(userProfile)

  if (userProfile) {
    let initValues = initFormValues
    Object.keys(initFormValues).forEach(key => {
      initValues[key] = userProfile[key] || initFormValues[key]
    })
    return (
      <Formik
        validateOnChange={true}
        initialValues={initValues}
        validationSchema={userProfileEditableValidationSchema}
        onSubmit={null}
      >
        {({ values }) => {
          // console.log(values)
          return (
            <Form>
              <FieldSet isDisabled={!isEditing}>
                {renderSwitch(inputType, {
                  [EInputType.Contact]: () => (
                    <ProfileContactInputs />
                  ),
                  [EInputType.Details]: () => (
                    <ProfileDetailsInputs />
                  ),
                })}
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
