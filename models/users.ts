export enum EUserRole {
  administrator = "administrator",
  client = "client",
  advisor = "advisor",
}

export type TAvatar = {
  url: string
}

export type TUserContact = {
  id?: string
  mobile: string
  phone: string
  address: string
  email: string
}

export type TUserClientDetails = {
  id?: string
  dateOfBirth: string
  occupationRating: string
  smoker: boolean
}

export type TUserProfile = {
  id?: string
  userId: string
  username: string
  firstName: string
  lastName: string
  profilePicture: string
  advisor: string
  avatar: TAvatar
  role: EUserRole
} & TUserContact

export type TClientProfile = {
  policiesRisk?: any
  policiesAsset?: any
  policiesKiwisaver?: any
  policiesPet?: any
} & TUserProfile & TUserClientDetails

export type TAdvisorProfile = {
  advisorNotes?: any
} & TUserProfile

export type TPolicy = {
  id: string
  policyId: string
  title: string
}
