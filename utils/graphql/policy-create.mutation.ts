import gql from "graphql-tag"

export const POLICY_CREATE_MUTATION = gql`
  mutation POLICY_CREATE($title: String!) {
    createPolicy(
      input: {
        clientMutationId: "POLICY_CREATE"
        title: $title
      }
    ) {
      policy {
        id
        title
      }
    }
  }
`
