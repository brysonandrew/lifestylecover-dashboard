import React, { useEffect } from "react"
import styled from "styled-components"
import { Formik, Form } from "formik"
import { LoginInputs } from "./login-inputs"
import { LOGIN_FORM_INIT } from "../../data-initial-values"
import { loginValidationSchema } from "../../data-validation"
import { useMutation } from "@apollo/react-hooks"
import { USER_LOGIN_MUTATION } from "../../utils/graphql/user-login.mutation"
import { NextRouter } from "next/router"
import { canUseDOM, store, useIsomorphicLayoutEffect, isBrowser } from "../../utils"
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
  onUpdateUser(user: any): void
}

export const Login = (props: TProps) => {
  const { onUpdateUser } = props
  const [
    handleLogin,
    mutationResult,
  ] = useMutation(USER_LOGIN_MUTATION);
  const { loading, error, data } = mutationResult
  useEffect(() => {
    if (data) {
      onUpdateUser(data.login)
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
          onSubmit={(data) => {
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
              </ButtonWrapper>
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </Wrapper>
  )
}
