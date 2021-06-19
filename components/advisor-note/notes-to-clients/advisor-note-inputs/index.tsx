import React from "react"
import styled from "styled-components"
import { TextField } from "../../../../common"
import { placeholder } from "../../../../data-placeholders"
import { AdvisorNoteTextList } from "./advisor-note-text-list"
import { NotesSectionTitle } from "../../notes-section-title"

type TProps = {
  values?: any
  isUsername?: boolean
}

export const AdvisorNoteInputs = (props: TProps) => {
  const { values, isUsername } = props
  return (
    <div>
      {isUsername && (
        <TextField
          label="Client's username"
          placeholder={placeholder.user.unknown}
          name="title"
        />
      )}
      <NotesSectionTitle title="Priorities">
        <AdvisorNoteTextList
          name="priority"
          namePlural="priorities"
          values={values}
        />
      </NotesSectionTitle>
      <NotesSectionTitle title="Recommendations">
        <AdvisorNoteTextList
          name="recommendation"
          namePlural="recommendations"
          values={values}
        />
      </NotesSectionTitle>
      <TextField
        label="Notes"
        placeholder={placeholder.user.unknown}
        name="notes"
        multiline
        rows={3}
      />
    </div>
  )
}
