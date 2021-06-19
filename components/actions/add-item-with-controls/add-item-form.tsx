import * as React from "react"
import styled from "styled-components"
import { Formik, Form } from "formik"
import { addUserValidationSchema } from "../../../data-validation"
import { ErrorDisplay, ModalButtons, AsyncStartIcon } from "../../../common"
import { TAddConfig, EFormType } from "../../../models"
import { useDataToSeeIfSuccess, useRefetch } from "../../../utils"

type TProps = {
  addConfig: TAddConfig
  onUnsetAdd(): void
}

export const AddItemForm = (props: TProps) => {
  const { addConfig, onUnsetAdd } = props
  const {
    refetch,
    inputs,
    componentInputs,
    createVariables,
    createMutation,
  } = addConfig
  const [handleCreatePolicy, { loading, data, error }] = createMutation

  const handleRefetch = () => {
    refetch()
    onUnsetAdd()
  }

  const isSuccess = useDataToSeeIfSuccess(
    data?.createPolicyAsset?.policyAsset?.id
  )
  const isRefetchTriggered = useRefetch(isSuccess, handleRefetch)

  return (
    <Formik
      initialValues={inputs}
      // validationSchema={addUserValidationSchema}
      onSubmit={null}
    >
      {({ values }) => {
        const variables = createVariables(values)
        return (
          <Form>
            {React.cloneElement(componentInputs, {
              values,
              formType: EFormType.Add,
            })}
            <ModalButtons
              onClose={() => onUnsetAdd()}
              onOk={() => handleCreatePolicy({ variables })}
              okIcon={
                <AsyncStartIcon
                  isLoading={loading}
                  isSuccess={isSuccess}
                  isError={error}
                />
              }
            >
              Save
            </ModalButtons>
            <ErrorDisplay>{error}</ErrorDisplay>
          </Form>
        )
      }}
    </Formik>
  )
}
