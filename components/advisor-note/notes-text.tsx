import React from "react"
import styled from "styled-components"
import { ADVISOR_NOTE_ITEM_INIT } from "../../data-initial-values-advisor-note"
import { ArrayText, TextFieldText } from "../../common"
import { NotesSectionTitle } from "./notes-section-title"

const Wrapper = styled.div`
  text-align: left;
`

type TProps = {
  children: any
}

export const NotesText = (props: TProps) => {
  const { children } = props
  return (
    <Wrapper>
      {children['priorities'] && (
        <NotesSectionTitle
          title="Priorities"
        >
          <ArrayText
            arrayInputs={ADVISOR_NOTE_ITEM_INIT}
          >
            {children['priorities']}
          </ArrayText>
        </NotesSectionTitle>
      )}
      {children['recommendations'] && (
        <NotesSectionTitle title="Recommendations">
          <ArrayText
            arrayInputs={ADVISOR_NOTE_ITEM_INIT}
          >
            {children['recommendations']}
          </ArrayText>
        </NotesSectionTitle>
      )}
      {children['notes'] && (
        <NotesSectionTitle title="Notes">
          <div>
            <TextFieldText>
              {children['notes']}
            </TextFieldText>
          </div>
        </NotesSectionTitle>
      )}
    </Wrapper>
  )
}
