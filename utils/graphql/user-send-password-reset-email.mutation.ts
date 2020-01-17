import gql from "graphql-tag"

/**
 * Send Password Reset Email
 * When a user needs to reset their password, they'll
 * need to have a Reset Password email sent.
 */
const USER_SEND_PASSWORD_RESET_EMAIL_MUTATION = gql`
  mutation USER_SEND_PASSWORD_RESET_EMAIL($username: String!) {
    sendPasswordResetEmail(
      input: {
        clientMutationId: "USER_SEND_PASSWORD_RESET_EMAIL"
        username: $username
      }
    ) {
      user {
        id
        email
      }
    }
  }
`
