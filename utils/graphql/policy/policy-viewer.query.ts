import gql from "graphql-tag"
import { POLICIES_FRAGMENTS } from "./policy.fragments"

export const POLICY_GET_VIEWER_RISK_QUERY = gql`
  query POLICY_GET_VIEWER_RISK {
    viewer {
      ...RISK_POLICIES
    }
  }
  ${POLICIES_FRAGMENTS.RISK_POLICIES}
`

export const POLICY_GET_VIEWER_ASSET_QUERY = gql`
  query POLICY_GET_VIEWER_ASSET {
    viewer {
      ...ASSET_POLICIES
    }
  }
  ${POLICIES_FRAGMENTS.ASSET_POLICIES}
`

export const POLICY_GET_VIEWER_KIWISAVER_QUERY = gql`
  query POLICY_GET_VIEWER_KIWISAVER {
    viewer {
      ...KIWISAVER_POLICIES
    }
  }
  ${POLICIES_FRAGMENTS.KIWISAVER_POLICIES}
`

export const POLICY_GET_VIEWER_PET_QUERY = gql`
  query POLICY_GET_VIEWER_PET {
    viewer {
      ...PET_POLICIES
    }
  }
  ${POLICIES_FRAGMENTS.PET_POLICIES}
`
