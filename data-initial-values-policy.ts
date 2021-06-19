const POLICY_FIXED_INPUTS = {
  title: "EMPTY",
  author: "EMPTY"
}

export const BENEFIT_RISK_INIT = {
  benefitType: "EMPTY",
  benefitDescription: "EMPTY",
  productName: "EMPTY",
  excess: "0",
  additionalFeatures: "EMPTY",
  exclusionsOrLoadings: "EMPTY",
  individualBenefitPremiums: "EMPTY"
}

export const POLICY_RISK_TEXT_INPUTS = {
  ...POLICY_FIXED_INPUTS,
  ownersName: "EMPTY",
  insured: "EMPTY",
  commencementDate: "EMPTY",
  premiumAmount: "0",
  premiumFrequency: "EMPTY",
  policyFee: "0",
}

export const POLICY_RISK_INIT = {
  ...POLICY_RISK_TEXT_INPUTS,
  benefits: [],
}

export const BENEFIT_ASSET_INIT = {
  insuredPartyName: "",
  premiumAmount: "",
  premiumFrequency: "",
  policyNumber: "",
  commencementDate: "",
  benefitType: "",
  benefitDescription: "",
  sumInsured: "",
  excess: "",
  situationOfRisk: "",
  additionalFeatures: "",
}

export const POLICY_ASSET_INIT = {
  ...POLICY_FIXED_INPUTS,
  benefits: []
}

export const POLICY_KIWISAVER_INPUTS_INIT = {
  memberNumber: "",
  dateJoined: "",
  pir: "",
  fundType: "",
  fundDescription: "",
  balance: "",
}

export const POLICY_KIWISAVER_INIT = {
  ...POLICY_FIXED_INPUTS,
  ...POLICY_KIWISAVER_INPUTS_INIT
}

export const PET_INIT = {
  petName: "",
  policyNumber: "",
  premiumAmount: "",
  premiumFrequency: "",
  commencementDate: "",
  productType: "",
  productDescription: "",
  sumInsured: "",
  excess: "",
  additionalFeatures: "",
}

export const POLICY_PET_INIT = {
  ...POLICY_FIXED_INPUTS,
  pets: []
}
