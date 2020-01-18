export enum EUserType {
  administrator = "administrator",
  client = "client",
  advisor = "advisor",
}

export type TUserProfile = {
  id: string
  username: string
  firstName: string
  lastName: string
  mobile: string
  phone: string
  address: string
  email: string
  role: string
  ext_mobile: string
}

export type TPolicy = {
  id: string
  title: string
}

