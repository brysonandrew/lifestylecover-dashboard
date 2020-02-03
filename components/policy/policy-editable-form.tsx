import * as React from "react"
import { Formik, Form } from "formik"
import { TPolicy, TUserProfile, EUserRole, EFormType } from "../../models"
import { policyEditableValidationSchema } from "../../data-validation"
import { SubmitButton } from "../../common"
import { defined, useRefetch, changedValues, useErrorAndCalledToSeeIfSuccess } from "../../utils"

const resolveVariables = (isClient, id, changed, title, reviewMetaObj, createVariables) => {
  if (isClient) {
    return {
      id,
      reviewMeta: JSON.stringify(
        {
          ...changed,
          // ...{ reviewerEmail: '' }
        }
      )
    }
  } else {
    const reviewMeta = JSON.stringify(changedValues(changed, reviewMetaObj))
    return {
      id,
      ...createVariables(changed),
      title,
      ...(reviewMeta === '{}'
        ? {reviewMeta: ''}
        : {reviewMeta})
    }
  }
}

type TProps = {
  onRefetch(changedValues: any): any
  policyInfo: TPolicy
  userProfile: TUserProfile
  formState: any
  initArrayValues?: any
  reviewMetaObj?: any
  mutation: any
  children: JSX.Element
  createVariables: any
}

export const PolicyEditableForm = (props: TProps) => {
  const { onRefetch, policyInfo, userProfile, children, mutation, formState, createVariables, reviewMetaObj } = props
  const [handleUpdatePolicy, updateMutation] = mutation;
  const { loading: isLoading, data, error, called } = updateMutation
  const [changedValuesState, setChangedValues] = React.useState(null)

  const isSuccess = useErrorAndCalledToSeeIfSuccess(data, error, called)
  const isRefetchTriggered = useRefetch(isSuccess, () => {
    onRefetch(changedValuesState)
  })

  if (policyInfo) {
    return (
      <Formik
        validateOnChange={true}
        initialValues={reviewMetaObj ? {...formState, ...reviewMetaObj} : formState}
        validationSchema={policyEditableValidationSchema}
        onSubmit={null}
      >
        {({ values }) => {
          const isClient = userProfile.role === EUserRole.client
          return (
            <Form>
              {React.cloneElement(children, { values, isClient, formType: EFormType.Edit })}
              <SubmitButton
                startIconConfig={{
                  isLoading,
                  isSuccess,
                  isError: defined(error)
                }}
                onClick={() => {
                  const changed = changedValues(formState, values)
                  setChangedValues(changed)
                  const variables = resolveVariables(isClient, policyInfo.id, changed, values.title, reviewMetaObj, createVariables)
                  console.log(variables)
                  handleUpdatePolicy({ variables })
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
