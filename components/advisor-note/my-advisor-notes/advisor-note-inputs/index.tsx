import React from "react"
import styled from "styled-components"
import { TextField, TextFieldArray, SubItemWrapper } from "../../../../common"
import { placeholder } from "../../../../data-placeholders"
import { BENEFIT_ASSET_INIT } from "../../../../data-initial-values-policy"
import { fromCamelCase } from "../../../../utils"
import { ADVISOR_NOTE_ITEM_INIT } from "../../../../data-initial-values-advisor-note"
import { AdvisorNoteTextList } from "./advisor-note-text-list"
const name = "priorities"
const namePlural = `${name}s`

type TProps = {
  values?: any
}

export const AdvisorNoteInputs = (props: TProps) => {
  const { values } = props
  return (
    <div>
      <TextField
        label="Cleint"
        placeholder={placeholder.user.unknown}
        name="title"
      />
      <AdvisorNoteTextList
        name="priorities"
        values={values}
      />
      <AdvisorNoteTextList
        name="recommendations"
        values={values}
      />
      <TextField
        label="Notes"
        placeholder={placeholder.user.unknown}
        name="title"
        multiline
        rows={3}
      />
    </div>
  )
}
