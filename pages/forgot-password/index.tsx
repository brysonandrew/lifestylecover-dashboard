import React, { useEffect } from "react"
import styled from "styled-components"
import { Formik, Form } from "formik"
import { LoginInputs } from "./forgot-password-inputs"
import { loginValidationSchema } from "../../data-validation"
import { useMutation } from "@apollo/react-hooks"
import { NextRouter } from "next/router"
import { Button, CircularProgress } from "@material-ui/core"
import { ButtonWrapper } from "../../common/buttons/button-wrapper"
import { USER_SEND_PASSWORD_RESET_EMAIL_MUTATION } from "../../utils/graphql/user-send-password-reset-email.mutation"
import { snackbarStore } from "../../common"
import { LOGIN_ROUTE } from "../../data"

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

type TProps = {
  router: NextRouter
  onUpdateUser(user: any): void
}

export default (props: TProps) => {
  const [
    handleSend,
    result,
  ] = useMutation(USER_SEND_PASSWORD_RESET_EMAIL_MUTATION);
  const { loading, error, data } = result
  useEffect(() => {
    if (data) {
      snackbarStore.dispatch.snackbar.handleOpen({message: 'Email sent!', severity: 'info'});
    }
  }, [data])
  return (
    <Wrapper>
      <FormWrapper>
        <h2>Forgot Password</h2>
        <Formik
          initialValues={{username: ""}}
          validationSchema={loginValidationSchema}
          onSubmit={null}
        >
          {({values}) => (
            <Form>
              <LoginInputs />
              <ButtonWrapper>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                  disabled={loading}
                  onClick={() => handleSend({
                    variables: {
                      username: values.username,
                    }
                  })}
                  startIcon={loading ? <CircularProgress size={18} color="inherit" /> : null}
                >
                  Send Reset Email
                </Button>
              </ButtonWrapper>
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </Wrapper>
  )
}
