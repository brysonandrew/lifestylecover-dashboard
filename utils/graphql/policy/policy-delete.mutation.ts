import gql from "graphql-tag"

export const POLICY_DELETE_MUTATION = gql`
  mutation POLICY_DELETE($id: ID!) {
    deletePolicy(
      input: {
        clientMutationId: "POLICY_DELETE"
        id: $id
      }
    ) {
      policy {
        deletedId
      }
    }
  }
`
