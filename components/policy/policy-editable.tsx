
import * as React from "react"
import { TUserProfile, TEditConfig } from "../../models"
import { PolicyEditableForm } from "./policy-editable-form"
import { FormText } from "../../common/text-ui/form-text"
import { initializeFormValues } from "../../utils"

type TProps = {
  editConfig: TEditConfig
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
  const { editConfig, refetch, inputs, arrayInputs, policyInfo, children, updateMutation, userProfile, createVariables } = props
  const [formState, setFormState] = React.useState(initializeFormValues(policyInfo, inputs, arrayInputs))

  const handleRefetch = (changedValues) => {
    setFormState({...formState, ...changedValues})
    refetch()
    editConfig.onSetEdit()
  }

  const reviewMetaObj = policyInfo.reviewMeta ? JSON.parse(policyInfo.reviewMeta) : null

  if (editConfig.isEditing) {
    return (
      <PolicyEditableForm
        key={policyInfo.id}
        policyInfo={policyInfo}
        userProfile={userProfile}
        reviewMetaObj={reviewMetaObj}
        formState={formState}
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
      <FormText isPolicy arrayInputs={arrayInputs} reviewMetaObj={reviewMetaObj}>
        {formState}
      </FormText>
    )
  }
} 
