import gql from "graphql-tag"

export const POLICY_FRAGMENTS = {
  RISK: gql`
    fragment RISK on PolicyRisk {
      id
      title
    }
  `,
  ASSET: gql`
    fragment ASSET on PolicyAsset {
      id
      title
    }
  `,
  KIWISAVER: gql`
    fragment KIWISAVER on PolicyKiwisaver {
      id
      title
    }
  `,
  PET: gql`
    fragment PET on PolicyPet {
      id
      title
    }
  `,
}
