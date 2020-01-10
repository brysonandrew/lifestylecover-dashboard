import * as React from "react"
import { Formik, Form } from "formik"
import { Login } from "./login"
import { MainWrapper } from "./wrapper"
import { INITIAL_FORM_STATE } from "../data-initial-values"
import { validationSchema } from "../data-validation"

export const Index = () => {
  return (
    <MainWrapper>
      <Formik
        validateOnChange={true}
        initialValues={INITIAL_FORM_STATE}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true)
          console.log('submitting')

          setSubmitting(false)
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <Login />
          </Form>
        )}
      </Formik>
    </MainWrapper>
  )
}
