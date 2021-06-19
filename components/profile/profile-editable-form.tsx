import * as React from "react"
import { Formik, Form } from "formik"
import { userProfileEditableValidationSchema } from "../../data-validation"
import { SubmitButton } from "../../common"
import { TUserProfile } from "../../models"
import { changedValues, initializeFormValues, defined, useDataToSeeIfSuccess, useRefetch } from "../../utils"
 
type TProps = {
  userProfile: Partial<TUserProfile>
  mutation: any
  refetch(): void
  initFormValues: any
  children: React.ReactNode
}

export const ProfileEditableForm = (props: TProps) => {
  const { userProfile, mutation, initFormValues, children, refetch } = props
  const [handleUpdateUser, mutationResult] = mutation
  const { loading: isLoading, error, data } = mutationResult

  const isSuccess = useDataToSeeIfSuccess(data?.updateUserProfile?.userProfile?.id)
  const isRefreshed = useRefetch(isSuccess, refetch)

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
                startIconConfig={{
                  isLoading,
                  isSuccess,
                  isError: defined(error)
                }}
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
