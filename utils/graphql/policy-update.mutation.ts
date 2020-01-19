import gql from "graphql-tag"

export const POLICY_UPDATE_MUTATION = gql`
  mutation POLICY_UPDATE($id: ID!, $title: String!) {
    updatePolicy(
      input: {
        clientMutationId: "POLICY_UPDATE"
        id: $id
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
