import gql from "graphql-tag"

// export const POLICY_FIXED = {
//   FIXED: gql`
//     fragment FIXED on PolicyRisk {
//       id
//       title
//       author {
//         id
//         username
//       }
//       reviewMeta
//     }
//   `,
// }

export const POLICY_FRAGMENTS = {
  RISK: gql`
    fragment RISK on PolicyRisk {
      id
      title
      author {
        id
        username
      }
      reviewMeta
      policyRiskId
      policyRisk {
        commencementDate
        insured
        ownersName
        policyFee
        premiumAmount
        premiumFrequency
        benefits {
          benefitType
          benefitDescription
          productName
          excess
          additionalFeatures
          exclusionsOrLoadings
          individualBenefitPremium
        }
      }
    }
  `,
  ASSET: gql`
    fragment ASSET on PolicyAsset {
      id
      title
      author {
        id
        username
      }
      reviewMeta
      policyAssetId
      policyAsset {
        benefits {
          insuredPartyName
          premiumAmount
          premiumFrequency
          policyNumber
          commencementDate
          benefitType
          benefitDescription
          sumInsured
          excess
          situationOfRisk
          additionalFeatures
        }
      }
    }
  `,
  KIWISAVER: gql`
    fragment KIWISAVER on PolicyKiwisaver {
      id
      title
      author {
        id
        username
      }
      reviewMeta
      policyKiwisaverId
      policyKiwisaver {
        memberNumber
        dateJoined
        pir
        fundType
        fundDescription
        balance
      }
    }
  `,
  PET: gql`
    fragment PET on PolicyPet {
      id
      title
      author {
        id
        username
      }
      reviewMeta
      policyPetId
      policyPet {
        pets {
          petName
          policyNumber
          premiumAmount
          premiumFrequency
          commencementDate
          productType
          productDescription
          sumInsured
          excess
          additionalFeatures
        }
      }
    }
  `,
}

export const POLICIES_FRAGMENTS = {
  RISK_POLICIES: gql`
    fragment RISK_POLICIES on User {
      id
      policiesRisk {
        edges {
          node {
            ...RISK
          }
        }
      }
    }
    ${POLICY_FRAGMENTS.RISK}
  `,
  ASSET_POLICIES: gql`
    fragment ASSET_POLICIES on User {
      id
      policiesAsset {
        edges {
          node {
            ...ASSET
          }
        }
      }
    }
    ${POLICY_FRAGMENTS.ASSET}
  `,
  KIWISAVER_POLICIES: gql`
    fragment KIWISAVER_POLICIES on User {
      id
      policiesKiwisaver {
        edges {
          node {
            ...KIWISAVER
          }
        }
      }
    }
    ${POLICY_FRAGMENTS.KIWISAVER}
  `,
  PET_POLICIES: gql`
    fragment PET_POLICIES on User {
      id
      policiesPet {
        edges {
          node {
            ...PET
          }
        }
      }
    }
    ${POLICY_FRAGMENTS.PET}
  `,
}
