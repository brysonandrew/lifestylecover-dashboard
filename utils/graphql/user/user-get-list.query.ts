import gql from "graphql-tag"
import { USER_FRAGMENTS } from "./user.fragments"

export const USER_GET_LIST_QUERY = gql`
  query USER_GET_LIST {
    users(first: 7) {
      edges {
        node {
          ...ADMIN
        }
      }
    }
  }
  ${USER_FRAGMENTS.ADMIN}
`
 