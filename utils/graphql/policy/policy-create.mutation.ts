import gql from "graphql-tag"
import { POLICY_FRAGMENTS } from "./policy.fragments"

export const POLICY_CREATE_RISK_MUTATION = gql`
  mutation POLICY_CREATE_RISK($title: String!) {
    createPolicyRisk(
      input: { clientMutationId: "POLICY_CREATE_RISK", title: $title }
    ) {
      policyRisk {
        ...RISK
      }
    }
  }
  ${POLICY_FRAGMENTS.RISK}
`

export const POLICY_CREATE_ASSET_MUTATION = gql`
  mutation POLICY_CREATE_ASSET($title: String!) {
    createPolicyAsset(
      input: { clientMutationId: "POLICY_CREATE_ASSET", title: $title }
    ) {
      policyAsset {
        ...ASSET
      }
    }
  }
  ${POLICY_FRAGMENTS.ASSET}
`

export const POLICY_CREATE_KIWISAVER_MUTATION = gql`
  mutation POLICY_CREATE_KIWISAVER($title: String!) {
    createPolicyKiwisaver(
      input: { clientMutationId: "POLICY_CREATE_KIWISAVER", title: $title }
    ) {
      policyKiwisaver {
        ...KIWISAVER
      }
    }
  }
  ${POLICY_FRAGMENTS.KIWISAVER}
`

export const POLICY_CREATE_PET_MUTATION = gql`
  mutation POLICY_CREATE_PET($title: String!) {
    createPolicyPet(
      input: { clientMutationId: "POLICY_CREATE_PET", title: $title }
    ) {
      policyPet {
        ...PET
      }
    }
  }
  ${POLICY_FRAGMENTS.PET}
`
