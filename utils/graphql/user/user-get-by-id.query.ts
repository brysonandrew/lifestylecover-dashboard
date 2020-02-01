import gql from "graphql-tag"
import { USER_FRAGMENTS } from "./user.fragments"

export const USER_GET_CLIENT_BY_ID_QUERY = gql`
  query USER_GET_CLIENT_BY_ID($id: ID!) {
    user(id: $id) {
      ...CLIENT
    }
  }
  ${USER_FRAGMENTS.CLIENT}
`

export const USER_GET_ADVISOR_BY_USER_ID_QUERY = gql`
  query USER_GET_ADVISOR_BY_USER_ID($userIds: [Int]!) {
    users(where: {include: $userIds}) {
      edges {
        node {
          ...ADVISOR
        }
      }
    }
  }
  ${USER_FRAGMENTS.ADVISOR}
`

export const USER_GET_ADVISOR_BY_ID_QUERY = gql`
  query USER_GET_ADVISOR_BY_ID($id: ID!) {
    user(userId: $id) {
      ...ADVISOR
    }
  }
  ${USER_FRAGMENTS.ADVISOR}
`

export const USER_GET_ADMIN_BY_ID_QUERY = gql`
  query USER_GET_ADMIN_BY_ID($id: ID!) {
    user(id: $id) {
      ...ADMIN
    }
  }
  ${USER_FRAGMENTS.ADMIN}
`
