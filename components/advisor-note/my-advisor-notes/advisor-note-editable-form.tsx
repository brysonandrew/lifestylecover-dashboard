import * as React from "react"
import { Formik, Form } from "formik"
import { TPolicy, TUserProfile, EUserRole } from "../../../models"
import { policyEditableValidationSchema } from "../../../data-validation"
import { SubmitButton } from "../../../common"
import {
  defined,
  useRefetch,
  changedValues,
  useErrorAndCalledToSeeIfSuccess,
} from "../../../utils"

type TProps = {
  onRefetch(changedValues: any): any
  policyInfo: TPolicy
  userProfile: TUserProfile
  initValues: any
  initArrayValues?: any
  mutation: any
  children: JSX.Element
  createVariables: any
}

export const AdvisorNoteEditableForm = (props: TProps) => {
  const {
    onRefetch,
    policyInfo,
    userProfile,
    children,
    mutation,
    initValues,
    createVariables,
  } = props
  const [handleUpdatePolicy, updateMutation] = mutation
  const { loading: isLoading, data, error, called } = updateMutation
  const [changedValuesState, setChangedValues] = React.useState(null)

  const isSuccess = useErrorAndCalledToSeeIfSuccess(data, error, called)
  const isRefetchTriggered = useRefetch(isSuccess, () => {
    onRefetch(changedValuesState)
  })

  if (policyInfo) {
    return (
      <Formik
        validateOnChange={true}
        initialValues={initValues}
        validationSchema={policyEditableValidationSchema}
        onSubmit={null}
      >
        {({ values }) => {
          const isClient = userProfile.role === EUserRole.client
          return (
            <Form>
              {React.cloneElement(children, { values })}
              <SubmitButton
                startIconConfig={{
                  isLoading,
                  isSuccess,
                  isError: defined(error),
                }}
                onClick={() => {
                  const changed = changedValues(initValues, values)
                  setChangedValues(changed)
                  const variables = isClient
                    ? {
                        id: policyInfo.id,
                        reviewMeta: JSON.stringify({
                          ...changed,
                          ...{
                            reviewer: "advisor",
                            reviewerEmail: "andrewbryson12@gmail.com",
                          },
                        }),
                      }
                    : {
                        id: policyInfo.id,
                        title: values.title,
                        ...createVariables(changed),
                      }
                  handleUpdatePolicy({ variables })
                }}
              />
            </Form>
          )
        }}
      </Formik>
    )
  } else {
    return null
  }
}
