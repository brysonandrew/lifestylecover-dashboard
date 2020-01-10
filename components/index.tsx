import * as React from "react"
import { Formik, Form } from "formik"
import { Login } from "./login"
import { MainWrapper } from "./wrapper"
import { INITIAL_FORM_STATE } from "../data-initial-values"
import { validationSchema } from "../data-validation"
import { Submit } from "../common/buttons"
import { useMutation } from "@apollo/react-hooks"
import { USER_LOGIN_MUTATION } from "../utils/graphql/user-login.mutation"

export const Index = () => {
  const [
    handleLogin,
    mutationResult,
  ] = useMutation(USER_LOGIN_MUTATION);
  const { loading: mutationLoading, error: mutationError } = mutationResult
  console.log(mutationResult)
  return (
    <MainWrapper title="Dashboard Login">
      <Formik
        validateOnChange={true}
        initialValues={INITIAL_FORM_STATE}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          const { username, password } = data
          setSubmitting(true)
          handleLogin({
            variables: {
              username,
              password
            }
          });

          setSubmitting(false)
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <Login />
            <Submit isSubmitting={isSubmitting}>
              {isSubmitting ? 'Submitting' : 'Submit'}
            </Submit>
            {mutationLoading && <p>Loading...</p>}
            {mutationError && <p>Error :( Please try again</p>}
          </Form>
        )}
      </Formik>
    </MainWrapper>
  )
}
