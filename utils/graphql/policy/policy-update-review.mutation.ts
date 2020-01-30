import gql from "graphql-tag"

export const POLICY_UPDATE_REVIEW_RISK_MUTATION = gql`
  mutation POLICY_UPDATE_REVIEW_RISK(
    $id: ID!,
    $reviewMeta: String!
  ) {
    updatePolicyRisk(
      input: {
        clientMutationId: "POLICY_UPDATE_REVIEW_RISK"
        id: $id
        reviewMeta: $reviewMeta
      }
    ) {
      policyRisk {
        id
      }
    }
  }
`

export const POLICY_UPDATE_REVIEW_ASSET_MUTATION = gql`
  mutation POLICY_UPDATE_REVIEW_ASSET(
    $id: ID!,
    $reviewMeta: String!
  ) {
    updatePolicyAsset(
      input: {
        clientMutationId: "POLICY_UPDATE_REVIEW_ASSET"
        id: $id
        reviewMeta: $reviewMeta
      }
    ) {
      policyAsset {
        id
      }
    }
  }
`

export const POLICY_UPDATE_REVIEW_KIWISAVER_MUTATION = gql`
  mutation POLICY_UPDATE_REVIEW_KIWISAVER(
    $id: ID!,
    $reviewMeta: String!
  ) {
    updatePolicyKiwisaver(
      input: {
        clientMutationId: "POLICY_UPDATE_REVIEW_KIWISAVER"
        id: $id
        title: $title
        reviewMeta: $reviewMeta
      }
    ) {
      policyKiwisaver {
        id
      }
    }
  }
`

export const POLICY_UPDATE_REVIEW_PET_MUTATION = gql`
  mutation POLICY_UPDATE_REVIEW_PET(
    $id: ID!,
    $reviewMeta: String!
  ) {
    updatePolicyPet(
      input: {
        clientMutationId: "POLICY_UPDATE_REVIEW_PET",
        id: $id,
        reviewMeta: $reviewMeta
      }
    ) {
      policyPet {
        id
      }
    }
  }
`
