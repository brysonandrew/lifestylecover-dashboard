import * as React from "react"
import styled from "styled-components"
import { color, layoutSizes } from "../../data"
import { UserItemControls } from "./user-item-controls"
import { UserItemInfoWrapper } from "./user-item-info-wrapper"
import { EAction, IActionConfig } from "../../models"
import { Add, Save, Cancel } from "@material-ui/icons"
import { useMutation } from "@apollo/react-hooks"
import { USER_CREATE_MUTATION } from "../../utils/graphql/user-create.mutation"
import { Formik, Form } from "formik"
import { addUserValidationSchema } from "../../data-validation"
import { TextFieldSmall } from "../../common/inputs/text-field-small"
import { placeholder } from "../../data-placeholders"
import { motion } from "framer-motion"
import { SubmitButton } from "../../common/buttons/submit-button"
import { Button, CircularProgress } from "@material-ui/core"
import { ErrorDisplay } from "./error-display"
import { OperationVariables, ApolloQueryResult } from "apollo-client"

const INIT = {
  username: 'x',
  email: 'x@gmail.com'
}

const Wrapper = styled(motion.li)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  padding-right: 8px;
`

const Info = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: calc(100% - ${layoutSizes.content.button.width - 8}px);
  margin-right: 8px;
  background-color: ${color.lightGrey};
`

const FormInner = styled(motion.div)`
  padding-bottom: 8px;
`

type TProps = {
  inputs: string[]
  updateConfig: any
  onSubmitClick(values: any): void
}

export const AddItemForm = (props: TProps) => {
  const { inputs, updateConfig, onSubmitClick } = props
  const { loading, data, error } = updateConfig

  return (
    <Formik
      validateOnChange={true}
      initialValues={INIT}
      validationSchema={addUserValidationSchema}
      onSubmit={null}
    >
      {({ values }) => (
        <Form>
          <FormInner>
            {inputs.map((inputKey) => (
              <TextFieldSmall
                key={inputKey}
                label={inputKey}
                placeholder={placeholder.user[inputKey]}
                name={inputKey}
              />
            ))}
            <Button
              variant="contained"
              color="primary"
              size="small"
              type="submit"
              disabled={loading}
              onClick={() => onSubmitClick(values)}
              startIcon={loading ? <CircularProgress size={18} color="inherit" /> : <Save />}
            >
              Save
              </Button>
            <ErrorDisplay>
              {error}
            </ErrorDisplay>
          </FormInner>
        </Form>
      )}
    </Formik>
  )
}
