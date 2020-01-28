import * as React from "react"
import { Formik, Form } from "formik"
import { TPolicy, TUserProfile, EUserType } from "../../models"
import { policyEditableValidationSchema } from "../../data-validation"
import { SubmitButton } from "../../common"
import { changedValues, initializeFormValues } from "../../utils"
import { PolicyReviewers } from "./policy-reviewers"

type TProps = {
  policyInfo: TPolicy
  userProfile: TUserProfile
  initValues: any
  initArrayValues?: any
  mutation: any
  children: JSX.Element
  createVariables: any
}

export const PolicyEditableForm = (props: TProps) => {
  const { policyInfo, userProfile, children, mutation, initValues, initArrayValues, createVariables } = props
  const [handleUpdatePolicy, updateMutation] = mutation;
  const { loading, error, data } = updateMutation

  if (policyInfo) {
    return (
      <Formik
        validateOnChange={true}
        initialValues={initValues}
        validationSchema={policyEditableValidationSchema}
        onSubmit={null}
      >
        {({ values }) => {
          const isClient = userProfile.role === EUserType.client
          return (
            <Form>
              {isClient && (
                <PolicyReviewers/>
              )}
              {React.cloneElement(children, {values})}
              <SubmitButton
                isLoading={loading}
                onClick={() => {
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
