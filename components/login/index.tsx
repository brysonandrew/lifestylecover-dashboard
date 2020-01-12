import * as React from "react"
import { Formik, Form } from "formik"
import { LoginInputs } from "./login-inputs"
import { MainWrapper } from "../main-wrapper"
import { LOGIN_FORM_INIT } from "../../data-initial-values"
import { loginValidationSchema } from "../../data-validation"
import { Submit } from "../../common/buttons"
import { useMutation } from "@apollo/react-hooks"
import { USER_LOGIN_MUTATION } from "../../utils/graphql/user-login.mutation"
import { NextRouter } from "next/router"

type TProps = {
  router: NextRouter
}

export const Index = (props: TProps) => {
  const [
    handleLogin,
    mutationResult,
  ] = useMutation(USER_LOGIN_MUTATION);
  const { loading: mutationLoading, error: mutationError, data: mutationData } = mutationResult
  console.log(mutationData)
  React.useEffect(() => {
    if (mutationData) {
      props.router.push('/profile')
    }
  }, [mutationData])
  return (
    <MainWrapper>
      <h2>Dashboard Login</h2>
      <Formik
        validateOnChange={true}
        initialValues={LOGIN_FORM_INIT}
        validationSchema={loginValidationSchema}
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
        {({ isSubmitting }) => (
          <Form>
            <LoginInputs />
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
