import * as React from "react"
import { TUserProfile, TEditConfig } from "../../../models"
import { initializeFormValues } from "../../../utils"
import { AdvisorNoteEditableForm } from "./advisor-note-editable-form"
import { FormText } from "../../../common"
import { NotesText } from "../notes-text"

type TProps = {
  editConfig: TEditConfig
  refetch(): void
  inputs: any
  arrayInputs?: any
  userProfile: TUserProfile
  updateMutation: any
  createVariables: any
  children: JSX.Element
  info: any
}

export const AdvisorNoteEditable = (props: TProps) => {
  const {
    editConfig,
    refetch,
    inputs,
    arrayInputs,
    info,
    children,
    updateMutation,
    userProfile,
    createVariables,
  } = props
  const [formState, setFormState] = React.useState(
    initializeFormValues(info, inputs, arrayInputs)
  )

  const handleRefetch = changedValues => {
    setFormState({ ...formState, ...changedValues })
    editConfig.onSetEdit()
  }

  if (editConfig.isEditing) {
    return (
      <AdvisorNoteEditableForm
        key={info.id}
        policyInfo={info}
        userProfile={userProfile}
        initValues={formState}
        initArrayValues={arrayInputs}
        mutation={updateMutation}
        createVariables={createVariables}
        onRefetch={handleRefetch}
      >
        {children}
      </AdvisorNoteEditableForm>
    )
  } else {
    return <NotesText>{formState}</NotesText>
  }
}
