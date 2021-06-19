import gql from "graphql-tag"

export const ADVISOR_NOTE_CREATE_MUTATION = gql`
  mutation POLICY_CREATE_RISK($title: String!, $meta: String!) {
    createAdvisorNote(
      input: {
        clientMutationId: "ADVISOR_NOTE_CREATE"
        title: $title
        meta: $meta
        status: PUBLISH
      }
    ) {
      advisorNote {
        id
      }
    }
  }
`
