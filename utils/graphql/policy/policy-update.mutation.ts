import gql from "graphql-tag"
import { POLICY_FRAGMENTS } from "./policy.fragments"

export const POLICY_UPDATE_RISK_MUTATION = gql`
  mutation POLICY_UPDATE_RISK(
    $id: ID!,
    $title: String!,
    $meta: String!
  ) {
    updatePolicyRisk(
      input: {
        clientMutationId: "POLICY_UPDATE_RISK"
        id: $id
        meta: $meta
      }
    ) {
      policyRisk {
        id
      }
    }
  }
`
// # ${POLICY_FRAGMENTS.RISK}

export const POLICY_UPDATE_ASSET_MUTATION = gql`
  mutation POLICY_UPDATE_ASSET(
    $id: ID!,
    $title: String!,
    $meta: String!
  ) {
    updatePolicyAsset(
      input: {
        clientMutationId: "POLICY_UPDATE_ASSET"
        id: $id
        title: $title
        meta: $meta
      }
    ) {
      policyAsset {
        id
      }
    }
  }
`

export const POLICY_UPDATE_KIWISAVER_MUTATION = gql`
  mutation POLICY_UPDATE_KIWISAVER(
    $id: ID!,
    $title: String!,
    $meta: String!
  ) {
    updatePolicyKiwisaver(
      input: {
        clientMutationId: "POLICY_UPDATE_KIWISAVER"
        id: $id
        title: $title
        meta: $meta
      }
    ) {
      policyKiwisaver {
        id
      }
    }
  }
`

export const POLICY_UPDATE_PET_MUTATION = gql`
  mutation POLICY_UPDATE_PET(
    $id: ID!,
    $title: String!,
    $meta: String!
  ) {
    updatePolicyPet(
      input: {
        clientMutationId: "POLICY_UPDATE_PET",
        id: $id,
        title: $title
      }
    ) {
      policyPet {
        id
      }
    }
  }
`

// export const POLICY_UPDATE_REVIEW_CONFIG_MUTATION = gql`
//   mutation POLICY_UPDATE_REVIEW_CONFIG($id: ID!, $reviewerConfig: String!) {
//     updatePolicyPet(
//       input: { clientMutationId: "POLICY_UPDATE_PET", id: $id, title: $title }
//     ) {
//       policyPet {
//         ...PET
//       }
//     }
//   }
//   ${POLICY_FRAGMENTS.PET}
// `
