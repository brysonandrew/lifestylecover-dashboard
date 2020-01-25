import gql from "graphql-tag"
import { POLICY_FRAGMENTS } from "./policy.fragments"

export const POLICY_UPDATE_RISK_MUTATION = gql`
  mutation POLICY_UPDATE_RISK($id: ID!, $title: String!) {
    updatePolicyRisk(
      input: {
        clientMutationId: "POLICY_UPDATE_RISK"
        id: $id
        title: $title
      }
    ) {
      policyRisk {
        ...RISK
      }
    }
  }
  ${POLICY_FRAGMENTS.RISK}
`

export const POLICY_UPDATE_ASSET_MUTATION = gql`
  mutation POLICY_UPDATE_ASSET($id: ID!, $title: String!) {
    updatePolicyAsset(
      input: {
        clientMutationId: "POLICY_UPDATE_ASSET"
        id: $id
        title: $title
      }
    ) {
      policyAsset {
        ...ASSET
      }
    }
  }
  ${POLICY_FRAGMENTS.ASSET}
`

export const POLICY_UPDATE_KIWISAVER_MUTATION = gql`
  mutation POLICY_UPDATE_KIWISAVER($id: ID!, $title: String!) {
    updatePolicyKiwisaver(
      input: {
        clientMutationId: "POLICY_UPDATE_KIWISAVER"
        id: $id
        title: $title
      }
    ) {
      policyKiwisaver {
        ...KIWISAVER
      }
    }
  }
  ${POLICY_FRAGMENTS.KIWISAVER}
`

export const POLICY_UPDATE_PET_MUTATION = gql`
  mutation POLICY_UPDATE_PET($id: ID!, $title: String!) {
    updatePolicyPet(
      input: {
        clientMutationId: "POLICY_UPDATE_PET"
        id: $id
        title: $title
      }
    ) {
      policyPet {
        ...PET
      }
    }
  }
  ${POLICY_FRAGMENTS.PET}
`
