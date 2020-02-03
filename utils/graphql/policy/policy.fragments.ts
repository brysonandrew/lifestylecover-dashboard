import gql from "graphql-tag"

export const POLICY_FIXED = {
  FIXED: gql`
    fragment FIXED on PolicyRisk {
      id
      title
      author
      reviewMeta
    }
  `,
}

export const POLICY_FRAGMENTS = {
  RISK: gql`
    fragment RISK on PolicyRisk {
      policyRiskId
      ...FIXED
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
    ${POLICY_FIXED.FIXED}
  `,
  ASSET: gql`
    fragment ASSET on PolicyAsset {
      policyAssetId
      ...FIXED
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
    ${POLICY_FIXED.FIXED}
  `,
  KIWISAVER: gql`
    fragment KIWISAVER on PolicyKiwisaver {
      policyKiwisaverId
      ...FIXED
      policyKiwisaver {
        memberNumber
        dateJoined
        pir
        fundType
        fundDescription
        balance
      }
    }
    ${POLICY_FIXED.FIXED}
  `,
  PET: gql`
    fragment PET on PolicyPet {
      policyPetId
      ...FIXED
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
    ${POLICY_FIXED.FIXED}
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
