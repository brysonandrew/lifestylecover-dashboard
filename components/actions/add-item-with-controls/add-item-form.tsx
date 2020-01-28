import * as React from "react"
import styled from "styled-components"
import { Save } from "@material-ui/icons"
import { Formik, Form } from "formik"
import { addUserValidationSchema } from "../../../data-validation"
import { CircularProgress } from "@material-ui/core"
import { ErrorDisplay, ModalButtons } from "../../../common"
import { TAddConfig } from "../../../models"

type TProps = {
  addConfig: TAddConfig
  onUnsetAdd(): void
}

export const AddItemForm = (props: TProps) => {
  const { addConfig, onUnsetAdd } = props
  const { inputs, componentInputs, createVariables, createMutation } = addConfig
  const [handleCreatePolicy, { loading, data, error }] = createMutation

  return (
    <Formik
      validateOnChange={true}
      initialValues={inputs}
      validationSchema={addUserValidationSchema}
      onSubmit={null}
    >
      {({ values }) => {
        const variables = createVariables(values)
        return (
          <Form>
            {React.cloneElement(componentInputs, {values})}
            <ModalButtons
              onClose={() => onUnsetAdd()}
              onOk={() => handleCreatePolicy({ variables })}
              okIcon={(loading
                ? <CircularProgress size={18} color="inherit" />
                : <Save />)}
            >
              Save
              </ModalButtons>
            <ErrorDisplay>
              {error}
            </ErrorDisplay>
          </Form>
        )
      }}
    </Formik>
  )
}
