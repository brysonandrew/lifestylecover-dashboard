import gql from "graphql-tag"

/***
 * Register User
 * For sites that have new user registrations enabled
 * (under the WP-Admin Settings > General), a registerUser
 * mutation will allow new users to register via a GraphQL
 * Mutation.
 */

const USER_REGISTER_MUTATION = gql`
  type RegisterUserInput {
    clientMutationId: String!
    username: String!
    email: String!
  }
  mutation USER_REGISTER($input: RegisterUserInput!) {
    registerUser(input: $input) {
      user {
        id
        name
      }
    }
  }
`
