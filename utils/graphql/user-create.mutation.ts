import gql from 'graphql-tag';

/**
 * Create User
 * The createUser mutation is different than the registerUser mutation,
 * because it requires the request to be authenticated and for the user 
 * to have proper capabilities to create users, much like if a user were 
 * to create another user from the WP-Admin dashboard.
 */
// type CreateUserInput {
//   clientMutationId: String!
//   username: String!
//   email: String!
// }
export const USER_CREATE_MUTATION = gql`

  mutation USER_CREATE($username: String!, $email: String!) {
    createUser(input: {
      clientMutationId: "USER_CREATE"
      username: $username
      email: $email
    }) {
      user {
        id
        name
      }
    }
  }
`
