import React from "react"
import styled from "styled-components"
import { Formik, Form } from "formik"
import { LoginInputs } from "./login-inputs"
import { MainWrapper } from "../main-wrapper"
import { LOGIN_FORM_INIT } from "../../data-initial-values"
import { loginValidationSchema } from "../../data-validation"
import { Submit } from "../../common/buttons"
import { useMutation } from "@apollo/react-hooks"
import { USER_LOGIN_MUTATION } from "../../utils/graphql/user-login.mutation"
import { NextRouter } from "next/router"
import { ErrorDisplay } from "./error-display"
import { SubmitButton } from "./submit-button"

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 100px;
  height: 100vh;
  width: 100%;
`

const FormWrapper = styled.div`
  width: 400px;
`


type TProps = {
  router: NextRouter
}

export const Login = (props: TProps) => {
  const [
    handleLogin,
    mutationResult,
  ] = useMutation(USER_LOGIN_MUTATION);
  const { loading: mutationLoading, error: mutationError, data: mutationData } = mutationResult
  React.useEffect(() => {
    if (mutationData) {
      props.router.push('/?activeMenuItem=profile', '/profile')
    }
  }, [mutationData])
  return (
    <Wrapper>
      <FormWrapper>
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
              <SubmitButton
                isLoading={mutationLoading}
              />
 
              <ErrorDisplay>
                {mutationError}
              </ErrorDisplay>
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </Wrapper>
  )
}
