import gql from 'graphql-tag';

/**
 * Delete User
 * Below is an example of deleting a user. The request 
 * must be authenticated and the user making the request 
 * must have proper capabilities to delete the user.
 */
export const USER_DELETE_MUTATION = gql`
  type DeleteUserInput {
    clientMutationId: String!
    id: String!
  }
  mutation USER_DELETE($input: DeleteUserInput!) {
    deleteUser(input: $input) {
      deletedId
    }
  }
`
