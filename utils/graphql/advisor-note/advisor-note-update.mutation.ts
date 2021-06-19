import gql from "graphql-tag"

export const ADVISOR_NOTE_UPDATE_MUTATION = gql`
  mutation ADVISOR_NOTE_UPDATE($id: ID!, $meta: String!) {
    updateAdvisorNote(
      input: {
        clientMutationId: "ADVISOR_NOTE_UPDATE_RISK"
        id: $id
        meta: $meta
      }
    ) {
      advisorNote {
        id
      }
    }
  }
`
