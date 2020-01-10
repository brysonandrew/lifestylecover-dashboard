import gql from 'graphql-tag';

/**
 * Send Password Reset Email
 * When a user needs to reset their password, they'll 
 * need to have a Reset Password email sent.
 */
const USER_SEND_PASSWORD_RESET_EMAIL_MUTATION = gql`
  type SendPasswordResetEmailInput {
    clientMutationId: String!
    username: String!
  }
  mutation USER_SEND_PASSWORD_RESET_EMAIL($input: SendPasswordResetEmailInput!) {
    sendPasswordResetEmail(input: $input) {
      user {
        id
        email
      }
    }
  }
`
// {
//   "input": {
//     "clientMutationId": "SendResetPasswordEmail",
//     "username": "billybob"
//   }
// }