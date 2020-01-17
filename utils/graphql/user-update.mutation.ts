import gql from "graphql-tag"
import { USER_FRAGMENTS } from "./user.fragments"

/**
 * Update User
 * Below is an example of updating a user. The request
 * must be authenticated and the user making the request
 * must have proper capabilities to edit the user being updated.
 */
export const USER_UPDATE_MUTATION = gql`
  mutation USER_UPDATE(
    $id: ID!
    $email: String
    $phone: String
    $mobile: String
    $address: String
  ) {
    updateUser(
      input: {
        clientMutationId: "USER_UPDATE"
        id: $id
        email: $email
        phone: $phone
        mobile: $mobile
        address: $address
      }
    ) {
      user {
        ...USER_INFO
      }
    }
  }
  ${USER_FRAGMENTS.USER_INFO}
`
