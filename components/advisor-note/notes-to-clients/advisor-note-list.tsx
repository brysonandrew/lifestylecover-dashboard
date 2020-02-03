import * as React from "react"
import { TAdvisorProfile, TEditConfig } from "../../../models"
import { List } from "../.."
import { useMutation } from "@apollo/react-hooks"
import {
  ADVISOR_NOTE_UPDATE_MUTATION,
  ADVISOR_NOTE_CREATE_MUTATION,
  ADVISOR_NOTE_DELETE_MUTATION,
} from "../../../utils"
import { AdvisorNoteInputs } from "./advisor-note-inputs"
import {
  ADVISOR_NOTE_ITEM_INIT,
  ADVISOR_NOTE_INIT,
} from "../../../data-initial-values-advisor-note"
import { AdvisorNoteEditable } from "./advisor-note-editable"
import { NotesSectionTitle } from "../notes-section-title"

type TProps = {
  userProfile: TAdvisorProfile
  edges: any[]
  refetch(): void
}

export const AdvisorNoteList = (props: TProps) => {
  const { userProfile, edges, refetch } = props

  const updateMutation = useMutation(ADVISOR_NOTE_UPDATE_MUTATION)
  const createMutation = useMutation(ADVISOR_NOTE_CREATE_MUTATION)
  const deleteMutation = useMutation(ADVISOR_NOTE_DELETE_MUTATION)

  const inputs = ADVISOR_NOTE_INIT
  const createVariables = values => {
    const { title, ...meta } = values
    return {
      title,
      meta: JSON.stringify(meta),
    }
  }

  return (
    <List
      addConfig={
        createMutation
          ? {
              refetch,
              inputs,
              createVariables,
              createMutation,
              componentInputs: <AdvisorNoteInputs isUsername />,
            }
          : null
      }
      deleteConfig={
        deleteMutation
          ? {
              refetch,
              deleteText: values => `note ${values.title}`,
              deleteMutation,
            }
          : null
      }
    >
      {edges.map(edge => ({
        itemInfo: edge.node,
        component: (editConfig: TEditConfig) => {
          return (
            <NotesSectionTitle title={`Client's username: ${edge.node.title}`}>
              <AdvisorNoteEditable
                key={edge.node.id}
                editConfig={editConfig}
                inputs={inputs}
                arrayInputs={ADVISOR_NOTE_ITEM_INIT}
                info={edge.node}
                userProfile={userProfile}
                updateMutation={updateMutation}
                createVariables={createVariables}
                refetch={refetch}
              >
                <AdvisorNoteInputs />
              </AdvisorNoteEditable>
            </NotesSectionTitle>
          )
        },
      }))}
    </List>
  )
}
