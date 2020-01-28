import * as React from "react"
import { Formik, Form } from "formik"
import { userProfileEditableValidationSchema } from "../../data-validation"
import { SubmitButton } from "../../common"
import { TUserProfile } from "../../models"
import { changedValues, initializeFormValues } from "../../utils"

type TProps = {
  userProfile: TUserProfile
  mutation: any
  initFormValues: any
  children: React.ReactNode
}

export const ProfileEditableForm = (props: TProps) => {
  const { userProfile, mutation, initFormValues, children } = props
  const [handleUpdateUser, mutationResult] = mutation
  const { loading, error, data } = mutationResult

  if (userProfile) {
    let initValues = initializeFormValues(userProfile, initFormValues)
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
              {children}
              <SubmitButton
                isLoading={loading}
                onClick={() =>
                  handleUpdateUser({
                    variables: {
                      id: userProfile.id,
                      ...changedValues(initValues, values)
                    },
                  })
                }
              />
            </Form>
          )
        }}
      </Formik>
    )
  } else {
    return null
  }
}
