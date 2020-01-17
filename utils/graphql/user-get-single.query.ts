import gql from "graphql-tag"
import { USER_FRAGMENTS } from "./user.fragments"

export const USER_GET_SINGLE_QUERY = gql`
  query USER_GET_SINGLE($id: ID!) {
    user(id: $id) {
      ...USER_INFO
    }
  }
  ${USER_FRAGMENTS.USER_INFO}
`
