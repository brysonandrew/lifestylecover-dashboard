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

export const POLICY = {
  id: "",
  policyId: "",
  title: "",
}
