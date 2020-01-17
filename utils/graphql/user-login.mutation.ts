import gql from 'graphql-tag';
import { USER_FRAGMENTS } from './user.fragments';

/**
 * Login User
 * The authToken that is received in response to 
 * the login mutation can then be stored in local 
 * storage (or similar) and used in subsequent 
 * requests as an HTTP Authorization header to 
 * Authenticate the user prior to execution of 
 * the GraphQL request.
 */
// type LoginInput {
//   clientMutationId: String!
//   username: String!
//   password: String!
// }
export const USER_LOGIN_MUTATION = gql`
  mutation USER_LOGIN($username: String!, $password: String!) {
    login(
      input: {
        clientMutationId: "USER_LOGIN"
        username: $username
        password: $password
      }
    ) {
      authToken
      user {
        ...USER_INFO
      }
    }
  }
  ${USER_FRAGMENTS.USER_INFO}
`
