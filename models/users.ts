export enum EUserRole {
  administrator = "administrator",
  client = "client",
  advisor = "advisor",
}

export type TAvatar = {
  url: string
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
  profilePicture: string
  avatar: TAvatar
  role: EUserRole
}

export type TClientProfile = {
  dateOfBirth: string
  occupationRating: string
  smoker: boolean
  policiesRisk?: any
  policiesAsset?: any
  policiesKiwisaver?: any
  policiesPet?: any
} & TUserProfile

export type TPolicy = {
  id: string
  policyId: string
  title: string
}
