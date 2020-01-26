import * as React from "react"
import { Formik, Form } from "formik"
import { TPolicy } from "../../models"
import { policyEditableValidationSchema } from "../../data-validation"
import { SubmitButton } from "../../common"
import { changedValues, initializeFormValues } from "../../utils"

type TProps = {
  policyInfo: TPolicy
  initFormValues: any
  mutation: any
  children: JSX.Element
}

export const PolicyEditableForm = (props: TProps) => {
  const { policyInfo, children, mutation, initFormValues } = props
  const [handleUpdatePolicy, updateMutation] = mutation;
  const { loading, error, data } = updateMutation

  if (policyInfo) {
    let initValues = initializeFormValues(initFormValues, policyInfo)
    return (
      <Formik
        validateOnChange={true}
        initialValues={initValues}
        validationSchema={policyEditableValidationSchema}
        onSubmit={null}
      >
        {({ values }) => {
          return (
            <Form>
              {React.cloneElement(children, {values})}
              <SubmitButton
                isLoading={loading}
                onClick={() =>
                  handleUpdatePolicy({
                    variables: {
                      id: policyInfo.id,
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
