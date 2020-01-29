import { TUserProfile } from ".";

export type TPolicyProps = {
  userProfile: TUserProfile
  fetchQuery: any
  updateMutation: any
  createMutation?: any
  deleteMutation?: any
}
