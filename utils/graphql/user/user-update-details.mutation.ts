import gql from "graphql-tag"
import { USER_FRAGMENTS } from "./user.fragments"

export const USER_UPDATE_DETAILS_MUTATION = gql`
  mutation USER_UPDATE_DETAILS(
    $id: ID!
    $dateOfBirth: String
    $occupationRating: String
    $smoker: Boolean
  ) {
    updateUser(
      input: {
        clientMutationId: "USER_UPDATE_DETAILS"
        id: $id
        dateOfBirth: $dateOfBirth
        occupationRating: $occupationRating
        smoker: $smoker
      }
    ) {
      user {
        ...CLIENT_DETAILS
      }
    }
  }
  ${USER_FRAGMENTS.CLIENT_DETAILS}
`
