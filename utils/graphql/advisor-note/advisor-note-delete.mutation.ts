import gql from "graphql-tag"

export const ADVISOR_NOTE_DELETE_MUTATION = gql`
  mutation ADVISOR_NOTE_DELETE($id: ID!) {
    deleteAdvisorNote(
      input: { clientMutationId: "ADVISOR_NOTE_DELETE", id: $id }
    ) {
      deletedId
      policyRisk {
        id
        title
      }
    }
  }
`
