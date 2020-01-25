import * as React from "react"
import { Formik, Form } from "formik"
import { useMutation } from "@apollo/react-hooks"
import { Save } from "@material-ui/icons"
import { Button, CircularProgress } from "@material-ui/core"
import { TPolicy } from "../../models"
import { policyEditableValidationSchema } from "../../data-validation"
import { ButtonWrapper } from "../../common/buttons/button-wrapper"
import { POLICY } from "../../data-initial-values"
import { FieldSet } from "../../common"
import { POLICY_UPDATE_RISK_MUTATION, changedValues } from "../../utils"

type TProps = {
  isEditing: boolean
  policyInfo: TPolicy
  initValues: any
  mutation: any
  children: React.ReactNode
}

export const PolicyEditableForm = (props: TProps) => {
  const { isEditing, policyInfo, children, mutation } = props
  const [handleUpdatePolicy, updateMutation] = mutation;
  const { loading, error, data } = updateMutation

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
          return (
            <Form>
              <FieldSet isDisabled={!isEditing}>
                {children}
              </FieldSet>
              {isEditing && (
                <ButtonWrapper>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    disabled={loading}
                    onClick={() =>
                      handleUpdatePolicy({
                        variables: {
                          id: policyInfo.id,
                          ...changedValues(initValues, values)
                        },
                      })
                    }
                    startIcon={
                      loading
                        ? (
                          <CircularProgress size={18} color="inherit" />
                        ) : (
                          <Save />
                        )
                    }
                  >
                    Save
                </Button>
                </ButtonWrapper>
              )}
            </Form>
          )
        }}
      </Formik>
    )
  } else {
    return null
  }
}
