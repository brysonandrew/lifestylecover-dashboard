import * as React from "react"
import { TPolicy } from "../../../models/users"
import { Formik, Form } from "formik"
import { policyEditableValidationSchema } from "../../../data-validation"
import { ButtonWrapper } from "../../../common/buttons/button-wrapper"
import { Button, CircularProgress } from "@material-ui/core"
import { useMutation } from "@apollo/react-hooks"
import { Save } from "@material-ui/icons"
import { PolicyEditableInputs } from "./policy-editable-inputs"
import { POLICY } from "../../../data-initial-values"
import { FieldSet } from "../../../common/inputs/field-set"
import { changedValues } from "../../../utils/forms"
import { POLICY_UPDATE_MUTATION } from "../../../utils/graphql/policy-update.mutation"

type TProps = {
  isEditing: boolean
  policyInfo: TPolicy
}

export const PolicyEditableForm = (props: TProps) => {
  const { isEditing, policyInfo } = props
  const [handleUpdatePolicy, updateMutation] = useMutation(POLICY_UPDATE_MUTATION);
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
                <PolicyEditableInputs />
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
