import * as React from "react"
import { Formik, Form } from "formik"
import { Button, CircularProgress } from "@material-ui/core"
import { Save } from "@material-ui/icons"
import { userProfileEditableValidationSchema } from "../../data-validation"
import { FieldSet, ButtonWrapper } from "../../common"
import { changedValues } from "../../utils"
import { TUserProfile } from "../../models"

type TProps = {
  isEditing: boolean
  userProfile: TUserProfile
  mutation: any
  initFormValues: any
  children: React.ReactNode
}

export const ProfileEditableForm = (props: TProps) => {
  const { isEditing, userProfile, mutation, initFormValues, children } = props
  const [handleUpdateUser, mutationResult] = mutation
  const { loading, error, data } = mutationResult

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
          return (
            <Form>
              <FieldSet isDisabled={!isEditing}>
                {children}
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
