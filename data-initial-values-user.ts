import { TUserProfile, TClientProfile } from "./models/users"

export const LOGIN_FORM_INIT = {
  // username: "admin",
  // password: "xGje2yy7qe&prDNUn)!9R5qm",
  username: "client",
  password: "Y0sgitjVovA@sD)EeRUJmReb",
  // username: "advisor",
  // password: "QYclifyw%2^OCMbUJcaG4M!r
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
  profilePicture: "",
  email: "",
  avatar: {
    url: null
  },
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
