import React from "react"
import styled from "styled-components"
import { Formik, Form } from "formik"
import { LoginInputs } from "./login-inputs"
import { LOGIN_FORM_INIT } from "../../data-initial-values"
import { loginValidationSchema } from "../../data-validation"
import { useMutation } from "@apollo/react-hooks"
import { USER_LOGIN_MUTATION } from "../../utils/graphql/user-login.mutation"
import { NextRouter } from "next/router"
import { ErrorDisplay } from "./error-display"
import { canUseDOM, store, useIsomorphicLayoutEffect } from "../../utils"
import { AUTH_TOKEN_KEY } from "../../data"
import { Button, CircularProgress } from "@material-ui/core"

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 100px;
  height: 100vh;
  width: 100%;
  font-size: 28px;
`

const FormWrapper = styled.div`
  width: 400px;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
`

type TProps = {
  router: NextRouter
}

export const Login = (props: TProps) => {
  const [
    handleLogin,
    mutationResult,
  ] = useMutation(USER_LOGIN_MUTATION);
  const { loading, error, data } = mutationResult
  useIsomorphicLayoutEffect(() => {
    if (data && canUseDOM) {
      if (data.login.authToken) {
        store(AUTH_TOKEN_KEY, data.login.authToken)
      }
      props.router.push('/?activeMenuItem=profile', '/profile')
    }
  }, [data])
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
            handleLogin({
              variables: {
                username,
                password
              }
            });
          }}
        >
          {() => (
            <Form>
              <LoginInputs />
              <ButtonWrapper>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                  disabled={loading}
                  startIcon={loading ? <CircularProgress size={18} color="inherit" /> : null}
                >
                  Login
                </Button>
                <ErrorDisplay>
                  {error}
                </ErrorDisplay>
              </ButtonWrapper>
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </Wrapper>
  )
}
