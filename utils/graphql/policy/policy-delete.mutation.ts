import gql from "graphql-tag"

export const POLICY_DELETE_RISK_MUTATION = gql`
  mutation POLICY_DELETE_RISK($id: ID!) {
    deletePolicyRisk(
      input: { clientMutationId: "POLICY_DELETE_RISK", id: $id }
    ) {
      deletedId
      policyRisk {
        id
        title
      }
    }
  }
`

export const POLICY_DELETE_ASSET_MUTATION = gql`
  mutation POLICY_DELETE_ASSET($id: ID!) {
    deletePolicyAsset(
      input: { clientMutationId: "POLICY_DELETE_ASSET", id: $id }
    ) {
      deletedId
      policyAsset {
        id
        title
      }
    }
  }
`

export const POLICY_DELETE_KIWISAVER_MUTATION = gql`
  mutation POLICY_DELETE_KIWISAVER($id: ID!) {
    deletePolicyKiwisaver(
      input: { clientMutationId: "POLICY_DELETE_KIWISAVER", id: $id }
    ) {
      deletedId
      policyKiwisaver {
        id
        title
      }
    }
  }
`

export const POLICY_DELETE_PET_MUTATION = gql`
  mutation POLICY_DELETE_PET($id: ID!) {
    deletePolicyPet(input: { clientMutationId: "POLICY_DELETE_PET", id: $id }) {
      deletedId
      policyPet {
        id
        title
      }
    }
  }
`
