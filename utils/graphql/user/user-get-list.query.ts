import gql from "graphql-tag"
import { USER_FRAGMENTS } from "./user.fragments"

export const USER_GET_LIST_QUERY = gql`
  query USER_GET_LIST {
    users {
      edges {
        node {
          ...BASIC
        }
      }
    }
  }
  ${USER_FRAGMENTS.BASIC}
`
