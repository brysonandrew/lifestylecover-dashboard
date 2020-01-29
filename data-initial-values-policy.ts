import { TUserProfile, TClientProfile } from "./models/users"

export const LOGIN_FORM_INIT = {
  username: "admin",
  password: "xGje2yy7qe&prDNUn)!9R5qm",
}

export const CREATE_USER_INIT = {
  username: "",
  email: "",
  password: "",
  role: "client"
}

export const USER_PROFILE: TUserProfile = {
  username: "",
  firstName: "",
  lastName: "",
  mobile: "",
  phone: "",
  address: "",
  email: "",
  role: null,
}

export const USER_CONTACT_FORM: Partial<TUserProfile> = {
  email: "EMPTY",
  mobile: "EMPTY",
  phone: "EMPTY",
  address: "EMPTY",
}

export const USER_DETAILS_FORM: Partial<TClientProfile> = {
  dateOfBirth: "EMPTY",
  occupationRating: "EMPTY",
  smoker: false,
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
  title: "EMPTY",
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
  title: "",
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
  title: "",
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
  title: "",
  pets: []
}
