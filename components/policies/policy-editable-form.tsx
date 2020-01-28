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
  initFormValues: any
  initArrayValues?: any
  mutation: any
  children: JSX.Element
}

export const PolicyEditableForm = (props: TProps) => {
  const { policyInfo, userProfile, children, mutation, initFormValues, initArrayValues } = props
  const [handleUpdatePolicy, updateMutation] = mutation;
  const { loading, error, data } = updateMutation

  if (policyInfo) {
    let initValues = initializeFormValues(policyInfo, initFormValues, initArrayValues)
    return (
      <Formik
        validateOnChange={true}
        initialValues={initValues as any}
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
                  const nextValues = isClient
                    ? {
                      values: JSON.stringify(changedValues(initValues, values))
                      // reviewers:
                    }
                    : changedValues(initValues, values)
                  console.log(JSON.stringify(values))
                  const { id, title, ...policyRisk } = values
                  handleUpdatePolicy({
                    variables: {
                      id: policyInfo.id,
                      clientChanges: JSON.stringify(values)
                    },
                  })
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
