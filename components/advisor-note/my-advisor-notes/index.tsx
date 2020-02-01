import * as React from "react"
import { TAdvisorProfile } from "../../../models"
import { PageWrapper, FormText } from "../../../common"
import { List } from "../.."
import { useMutation, useQuery } from "@apollo/react-hooks"
import { ADVISOR_NOTE_UPDATE_MUTATION } from "../../../utils/graphql/advisor-note/advisor-note-update.mutation"
import { ADVISOR_NOTE_CREATE_MUTATION } from "../../../utils/graphql/advisor-note/advisor-note-create.mutation"
import { ADVISOR_NOTE_DELETE_MUTATION } from "../../../utils/graphql/advisor-note/advisor-note-delete.mutation"
import { ADVISOR_NOTE_LIST_BY_ADVISOR_QUERY } from "../../../utils/graphql/advisor-note/advisor-note-by-advisor.query"
import { AdvisorNoteInputs } from "./advisor-note-inputs"
import { ADVISOR_NOTE_ITEM_INIT } from "../../../data-initial-values-advisor-note"

type TProps = {
  userProfile: TAdvisorProfile
}

export const MyAdvisorNotes = (props: TProps) => {
  const { userProfile } = props
  const { loading, error, data, refetch } = useQuery(ADVISOR_NOTE_LIST_BY_ADVISOR_QUERY, {
    variables: {id: userProfile.id}
  })

  const updateMutation = useMutation(ADVISOR_NOTE_UPDATE_MUTATION)
  const createMutation = useMutation(ADVISOR_NOTE_CREATE_MUTATION)
  const deleteMutation = useMutation(ADVISOR_NOTE_DELETE_MUTATION)

  console.log(data)
  
  return (
    <PageWrapper title="Notes to Clients">
      <List
        addConfig={
          createMutation
            ? {
              refetch,
              inputs: ADVISOR_NOTE_ITEM_INIT,
              createVariables: (values) => {
                const { title, ...meta } = values
                return {
                  title,
                  meta: JSON.stringify(meta)
                }
              },
              createMutation,
              componentInputs: (
                <AdvisorNoteInputs/>
              )
            }
            : null}
        deleteConfig={
          deleteMutation
            ? {
              refetch,
              deleteText: (values) => `policy ${values.title}`,
              deleteMutation
            }
            : null}
      >
        {userProfile.advisorNotes.edges.map((edge) => ({
          itemInfo: edge.node,
          component: (isEditing) => {
            <FormText key={edge.node.id}>
              {edge.node.advisorNotes}
            </FormText>
          }
        }))}
      </List>
    </PageWrapper>
  )
}

