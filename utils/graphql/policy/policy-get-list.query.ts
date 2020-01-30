import gql from "graphql-tag"
import { POLICY_FRAGMENTS } from "./policy.fragments"

export const POLICY_GET_RISK_LIST_QUERY = gql`
  query POLICY_GET_RISK_LIST {
    policiesRisk {
      edges {
        node {
          ...RISK
        }
      }
    }
  }
  ${POLICY_FRAGMENTS.RISK}
`

export const POLICY_GET_ASSET_LIST_QUERY = gql`
  query POLICY_GET_ASSET_LIST {
    policiesAsset {
      edges {
        node {
          ...ASSET
        }
      }
    }
  }
  ${POLICY_FRAGMENTS.ASSET}
`

export const POLICY_GET_KIWISAVER_LIST_QUERY = gql`
  query POLICY_GET_KIWISAVER_LIST {
    policiesKiwisaver {
      edges {
        node {
          ...KIWISAVER
        }
      }
    }
  }
  ${POLICY_FRAGMENTS.KIWISAVER}
`

export const POLICY_GET_PET_LIST_QUERY = gql`
  query POLICY_GET_PET_LIST {
    policiesPet {
      edges {
        node {
          ...PET
        }
      }
    }
  }
  ${POLICY_FRAGMENTS.PET}
`
