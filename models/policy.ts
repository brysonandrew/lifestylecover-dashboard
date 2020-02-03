import { TUserProfile } from "."

export type TPolicyProps = {
  isLoading: boolean
  error: any
  edges: any[]
  refetch(): void
  userProfile: TUserProfile
  updateMutation: any
  createMutation?: any
  deleteMutation?: any
}

export enum EPolicyFetchKey {
  policiesAsset = "policiesAsset",
  policiesRisk = "policiesRisk",
  policiesKiwisaver = "policiesKiwisaver",
  policiesPet = "policiesPet",
}
