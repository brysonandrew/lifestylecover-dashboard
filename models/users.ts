export enum EUserRole {
  administrator = "administrator",
  client = "client",
  advisor = "advisor",
}

export type TUserProfile = {
  id?: string
  username: string
  firstName: string
  lastName: string
  mobile: string
  phone: string
  address: string
  email: string
  role: EUserRole
}

export type TClientProfile = {
  dateOfBirth: string
  occupationRating: string
  smoker: boolean
} & TUserProfile

export type TPolicy = {
  id: string
  policyId: string
  title: string
}
