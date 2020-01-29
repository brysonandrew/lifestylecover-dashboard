import * as React from "react"
import { Formik, Form } from "formik"
import { TPolicy, TUserProfile, EUserRole } from "../../models"
import { policyEditableValidationSchema } from "../../data-validation"
import { SubmitButton } from "../../common"
import { defined, useRefetch, useDataToSeeIfSuccess } from "../../utils"
import { PolicyReviewers } from "./policy-reviewers"

type TProps = {
  refetch: any
  policyInfo: TPolicy
  userProfile: TUserProfile
  initValues: any
  initArrayValues?: any
  mutation: any
  children: JSX.Element
  createVariables: any
}

export const PolicyEditableForm = (props: TProps) => {
  const { refetch, policyInfo, userProfile, children, mutation, initValues, createVariables } = props
  const [handleUpdatePolicy, updateMutation] = mutation;
  const { loading: isLoading, error, data } = updateMutation

  const isSuccess = useDataToSeeIfSuccess(data?.deletePolicyAsset?.deletedId)
  const isRefetchTriggered = useRefetch(isSuccess, refetch)

  if (policyInfo) {
    return (
      <Formik
        validateOnChange={true}
        initialValues={initValues}
        validationSchema={policyEditableValidationSchema}
        onSubmit={null}
      >
        {({ values }) => {
          const isClient = userProfile.role === EUserRole.client
          return (
            <Form>
              {isClient && (
                <PolicyReviewers/>
              )}
              {React.cloneElement(children, {values})}
              <SubmitButton
                startIconConfig={{
                  isLoading,
                  isSuccess,
                  isError: defined(error)
                }}
                onClick={() => {
                  console.log(createVariables(values))
                  const variables = {
                    id: policyInfo.id,
                    ...createVariables(values)
                  }
                  handleUpdatePolicy({variables})
                }}
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
