import gql from 'graphql-tag';

/**
 * Update User
 * Below is an example of updating a user. The request 
 * must be authenticated and the user making the request 
 * must have proper capabilities to edit the user being updated.
 */
const USER_UPDATE_MUTATION = gql`
  type UpdateUserInput {
    clientMutationId: String!
    id: String!
    id: firstName!
  }
  mutation USER_UPDATE($input: UpdateUserInput!) {
    createUser(input: $input) {
      user {
        id
        name
      }
    }
  }
`
