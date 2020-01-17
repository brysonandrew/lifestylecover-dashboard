import { TUserProfile } from "./models/users"

export const LOGIN_FORM_INIT = {
  username: "",
  password: "",
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
  ext_mobile: ""
}

export const CREATE_POLICY_INIT = {
  referenceNumber: "",
}
