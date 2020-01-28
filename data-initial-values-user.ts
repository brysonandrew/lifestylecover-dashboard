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
