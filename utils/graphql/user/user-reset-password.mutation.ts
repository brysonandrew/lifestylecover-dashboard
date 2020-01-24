import gql from "graphql-tag"

/**
 * Reset User Password
 * The email that is sent to a user to reset their password
 * contains a unique key that grants them access to reset the password.
 *
 * If that key is entered along with the matching username and
 * a new password, the password can be reset..
 */
const USER_RESET_PASSWORD_MUTATION = gql`
  type ResetPasswordInput {
    clientMutationId: String!
    key: String!
    login: String!
    password: String!
  }
  mutation USER_RESET_PASSWORD($input: ResetPasswordInput!) {
    sendPasswordResetEmail(input: $input) {
      user {
        id
        email
      }
    }
  }
`
