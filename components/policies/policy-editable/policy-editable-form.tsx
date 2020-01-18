import * as React from "react"
import { TPolicy } from "../../../models/users"
import { Formik, Form } from "formik"
import { policyEditableValidationSchema } from "../../../data-validation"
import { ButtonWrapper } from "../../../common/buttons/button-wrapper"
import { Button, CircularProgress } from "@material-ui/core"
import { useMutation } from "@apollo/react-hooks"
import { Save } from "@material-ui/icons"
import { PolicyEditableInputs } from "./policy-editable-inputs"
import { USER_UPDATE_MUTATION } from "../../../utils/graphql/user-update.mutation"
import { POLICY } from "../../../data-initial-values"

type TProps = {
  policyInfo: TPolicy
}

export const PolicyEditableForm = (props: TProps) => {
  const { policyInfo } = props
  const [handleUpdateUser, mutationResult] = useMutation(USER_UPDATE_MUTATION)
  const { loading, error, data } = mutationResult

  if (policyInfo) {
    let initValues = POLICY
    Object.keys(POLICY).forEach(key => {
      initValues[key] = policyInfo[key] || POLICY[key]
    })
    return (
      <Formik
        validateOnChange={true}
        initialValues={initValues}
        validationSchema={policyEditableValidationSchema}
        onSubmit={null}
      >
        {({ values }) => {
          const { title } = values
          console.log(title)
          return (
            <Form>
              <PolicyEditableInputs />
              <ButtonWrapper>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                  disabled={loading}
                  onClick={() =>
                    handleUpdateUser({
                      variables: {
                        id: policyInfo.id,
                        title
                      },
                    })
                  }
                  startIcon={
                    loading ? (
                      <CircularProgress size={18} color="inherit" />
                    ) : (
                      <Save />
                    )
                  }
                >
                  Save
                </Button>
              </ButtonWrapper>
            </Form>
          )
        }}
      </Formik>
    )
  } else {
    return null
  }
}
