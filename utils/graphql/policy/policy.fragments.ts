import gql from "graphql-tag"

export const POLICY_FRAGMENTS = {
  RISK: gql`
    fragment RISK on PolicyRisk {
      id
      title
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
  `,
}
