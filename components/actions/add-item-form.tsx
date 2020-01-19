import * as React from "react"
import styled from "styled-components"
import { Save } from "@material-ui/icons"
import { Formik, Form } from "formik"
import { addUserValidationSchema } from "../../data-validation"
import { TextField } from "../../common/inputs/text-field"
import { placeholder } from "../../data-placeholders"
import { motion } from "framer-motion"
import { Button, CircularProgress } from "@material-ui/core"
import { ErrorDisplay } from "../../common/inputs/error-display"

const FormInner = styled(motion.div)`
`

type TProps = {
  formStateInit?: any
  inputs: string[]
  updateConfig: any
  onSubmitClick(values: any): void
}

export const AddItemForm = (props: TProps) => {
  const { formStateInit, inputs, updateConfig, onSubmitClick } = props
  const { loading, data, error } = updateConfig

  return (
    <Formik
      validateOnChange={true}
      initialValues={formStateInit || {}}
      validationSchema={addUserValidationSchema}
      onSubmit={null}
    >
      {({ values }) => (
        <Form>
          <FormInner>
            {inputs.map((inputKey) => (
              <TextField
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
