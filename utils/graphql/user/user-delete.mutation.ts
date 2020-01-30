import gql from "graphql-tag"

/**
 * Delete User
 * Below is an example of deleting a user. The request
 * must be authenticated and the user making the request
 * must have proper capabilities to delete the user.
 */
// type DeleteUserInput {
//   clientMutationId: String!
//   id: String!
// }
export const USER_DELETE_MUTATION = gql`
  mutation USER_DELETE($id: String!) {
    deleteUser(input: { clientMutationId: "USER_DELETE", id: $id }) {
      deletedId
    }
  }
`
