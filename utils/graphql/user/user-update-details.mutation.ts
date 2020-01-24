import gql from "graphql-tag"
import { USER_FRAGMENTS } from "./user.fragments"

export const USER_UPDATE_CONTACT_MUTATION = gql`
  mutation USER_UPDATE_CONTACT_MUTATION(
    $id: ID!
    # $email: String
    $phone: String
    $mobile: String
    $address: String
  ) {
    updateUser(
      input: {
        clientMutationId: "USER_UPDATE_ADVISOR"
        id: $id
        # email: $email
        phone: $phone
        mobile: $mobile
        address: $address
      }
    ) {
      user {
        ...CONTACT
      }
    }
  }
  ${USER_FRAGMENTS.CONTACT}
`
