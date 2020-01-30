import gql from "graphql-tag"
import { USER_FRAGMENTS } from "./user.fragments"

export const VIEWER_INIT_QUERY = gql`
  query VIEWER_INIT {
    viewer {
      ...LOGIN
    }
  }
  ${USER_FRAGMENTS.LOGIN}
`

export const VIEWER_CLIENT_QUERY = gql`
  query VIEWER_CLIENT {
    viewer {
      ...CLIENT
    }
  }
  ${USER_FRAGMENTS.CLIENT}
`

export const VIEWER_ADVISOR_QUERY = gql`
  query VIEWER_ADVISOR {
    viewer {
      ...ADVISOR
    }
  }
  ${USER_FRAGMENTS.ADVISOR}
`

export const VIEWER_ADMIN_QUERY = gql`
  query VIEWER_ADMIN {
    viewer {
      ...ADMIN
    }
  }
  ${USER_FRAGMENTS.ADMIN}
`
