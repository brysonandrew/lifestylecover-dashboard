import gql from "graphql-tag"

export const POLICY_UPDATE_RISK_MUTATION = gql`
  mutation POLICY_UPDATE_RISK($id: ID!, $title: String!, $meta: String!) {
    updatePolicyRisk(
      input: {
        clientMutationId: "POLICY_UPDATE_RISK"
        id: $id
        title: $title
        meta: $meta
      }
    ) {
      policyRisk {
        id
      }
    }
  }
`

export const POLICY_UPDATE_ASSET_MUTATION = gql`
  mutation POLICY_UPDATE_ASSET($id: ID!, $title: String!, $meta: String!) {
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
  mutation POLICY_UPDATE_KIWISAVER($id: ID!, $title: String!, $meta: String!) {
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
  mutation POLICY_UPDATE_PET($id: ID!, $title: String!, $meta: String!) {
    updatePolicyPet(
      input: {
        clientMutationId: "POLICY_UPDATE_PET"
        id: $id
        title: $title
        meta: $meta
      }
    ) {
      policyPet {
        id
      }
    }
  }
`
