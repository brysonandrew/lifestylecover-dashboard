import gql from "graphql-tag"
import { POLICY_FRAGMENTS } from "./policy.fragments"

export const POLICY_CREATE_RISK_MUTATION = gql`
  mutation POLICY_CREATE_RISK($title: String!, $meta: String!) {
    createPolicyRisk(
      input: {
        clientMutationId: "POLICY_CREATE_RISK"
        title: $title
        meta: $meta
        author: $author
        status: PUBLISH
      }
    ) {
      policyRisk {
        ...RISK
      }
    }
  }
  ${POLICY_FRAGMENTS.RISK}
`

export const POLICY_CREATE_ASSET_MUTATION = gql`
  mutation POLICY_CREATE_ASSET(
    $title: String!
    $meta: String!
    $author: String!
  ) {
    createPolicyAsset(
      input: {
        clientMutationId: "POLICY_CREATE_ASSET"
        title: $title
        meta: $meta
        author: $author
        status: PUBLISH
      }
    ) {
      policyAsset {
        ...ASSET
      }
    }
  }
  ${POLICY_FRAGMENTS.ASSET}
`

export const POLICY_CREATE_KIWISAVER_MUTATION = gql`
  mutation POLICY_CREATE_KIWISAVER(
    $title: String!
    $meta: String!
    $author: String!
  ) {
    createPolicyKiwisaver(
      input: {
        clientMutationId: "POLICY_CREATE_KIWISAVER"
        title: $title
        meta: $meta
        author: $author
        status: PUBLISH
      }
    ) {
      policyKiwisaver {
        ...KIWISAVER
      }
    }
  }
  ${POLICY_FRAGMENTS.KIWISAVER}
`

export const POLICY_CREATE_PET_MUTATION = gql`
  mutation POLICY_CREATE_PET(
    $title: String!
    $meta: String!
    $author: String!
  ) {
    createPolicyPet(
      input: {
        clientMutationId: "POLICY_CREATE_PET"
        title: $title
        meta: $meta
        author: $author
        status: PUBLISH
      }
    ) {
      policyPet {
        ...PET
      }
    }
  }
  ${POLICY_FRAGMENTS.PET}
`
