import React from "react"
import styled from "styled-components"
import { TextField } from "../../../../common"
import { placeholder } from "../../../../data-placeholders"
import { AdvisorNoteTextList } from "./advisor-note-text-list"

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
