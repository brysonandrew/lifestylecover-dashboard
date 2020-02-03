import gql from "graphql-tag"

export const POLICY_UPDATE_RISK_MUTATION = gql`
  mutation POLICY_UPDATE_RISK($id: ID!, $title: String!, $meta: String!, $reviewMeta: String) {
    updatePolicyRisk(
      input: {
        clientMutationId: "POLICY_UPDATE_RISK"
        id: $id
        title: $title
        meta: $meta
        reviewMeta: $reviewMeta
      }
    ) {
      policyRisk {
        id
      }
    }
  }
`

export const POLICY_UPDATE_ASSET_MUTATION = gql`
  mutation POLICY_UPDATE_ASSET($id: ID!, $title: String!, $meta: String!, $reviewMeta: String) {
    updatePolicyAsset(
      input: {
        clientMutationId: "POLICY_UPDATE_ASSET"
        id: $id
        title: $title
        meta: $meta
        reviewMeta: $reviewMeta
      }
    ) {
      policyAsset {
        id
      }
    }
  }
`

export const POLICY_UPDATE_KIWISAVER_MUTATION = gql`
  mutation POLICY_UPDATE_KIWISAVER($id: ID!, $title: String!, $meta: String!, $reviewMeta: String) {
    updatePolicyKiwisaver(
      input: {
        clientMutationId: "POLICY_UPDATE_KIWISAVER"
        id: $id
        title: $title
        meta: $meta
        reviewMeta: $reviewMeta
      }
    ) {
      policyKiwisaver {
        id
      }
    }
  }
`

export const POLICY_UPDATE_PET_MUTATION = gql`
  mutation POLICY_UPDATE_PET($id: ID!, $title: String!, $meta: String!, $reviewMeta: String) {
    updatePolicyPet(
      input: {
        clientMutationId: "POLICY_UPDATE_PET"
        id: $id
        title: $title
        meta: $meta
        reviewMeta: $reviewMeta
      }
    ) {
      policyPet {
        id
      }
    }
  }
`
