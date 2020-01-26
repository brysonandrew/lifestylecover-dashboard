import { TUserProfile, TClientProfile } from "./models/users"

export const LOGIN_FORM_INIT = {
  username: "admin",
  password: "xGje2yy7qe&prDNUn)!9R5qm",
}

export const CREATE_USER_INIT = {
  username: "",
  password: "",
  'user-type': "client"
}

export const USER_PROFILE: TUserProfile = {
  id: "",
  username: "",
  firstName: "",
  lastName: "",
  mobile: "",
  phone: "",
  address: "",
  email: "",
  role: "",
}

export const USER_CONTACT_FORM: Partial<TUserProfile> = {
  mobile: "",
  phone: "",
  address: "",
}

export const USER_DETAILS_FORM: Partial<TClientProfile> = {
  dateOfBirth: "",
  occupationRating: "",
  smoker: false,
}

export const BENEFIT_RISK_INIT = {
  benefitType: "",
  benefitDescription: "",
  productName: "",
  excess: "",
  additionalFeatures: "",
  exclusionsOrLoadings: "",
  individualBenefitPremiums: ""
}

export const POLICY_RISK_INIT = {
  id: "",
  title: "",
  ownersName: "",
  insured: "",
  commencementDate: "",
  premiumAmount: "",
  premiumFrequency: "",
  policyFee: "",
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
  id: "",
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
  id: "",
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
  id: "",
  title: "",
  pets: []
}
