
import * as React from "react"
import { TUserProfile } from "../../models"
import { PolicyEditableForm } from "./policy-editable-form"
import { FormText } from "../../common/text-ui/form-text"
import { initializeFormValues } from "../../utils"

type TProps = {
  isEditing: boolean
  refetch(): void
  inputs: any
  arrayInputs?: any
  userProfile: TUserProfile
  updateMutation: any
  createVariables: any
  children: JSX.Element
  policyInfo: any
}

export const PolicyEditable = (props: TProps) => {
  const { isEditing, refetch, inputs, arrayInputs, policyInfo, children, updateMutation, userProfile, createVariables } = props
  const [formState, setFormState] = React.useState(initializeFormValues(policyInfo, inputs, arrayInputs))

  const handleRefetch = (changedValues) => {
    setFormState({...formState, ...changedValues})
  }

  if (isEditing) {
    return (
      <PolicyEditableForm
        key={policyInfo.id}
        policyInfo={policyInfo}
        userProfile={userProfile}
        initValues={formState}
        initArrayValues={arrayInputs}
        mutation={updateMutation}
        createVariables={createVariables}
        onRefetch={handleRefetch}
      >
        {children}
      </PolicyEditableForm>
    )
  } else {
    return (
      <FormText arrayInputs={arrayInputs}>
        {formState}
      </FormText>
    )
  }
} 
