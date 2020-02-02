import { formatDate } from "."
import { TUserProfile, TClientProfile } from "../models"

export const createUserProfile = (user): (TUserProfile | TClientProfile) => {
  if (user) {
    let {
      id,
      userId,
      username,
      firstName,
      lastName,
      email,
      mobile,
      phone,
      address,
      dateOfBirth,
      occupationRating,
      smoker,
      profilePicture,
      avatar,
      roles,
      advisor,
      policiesRisk,
      policiesAsset,
      policiesKiwisaver,
      policiesPet
    } = user
    const role = roles?.nodes[0]?.name
    dateOfBirth = formatDate(dateOfBirth)
    return {
      id,
      userId,
      username,
      firstName,
      lastName,
      email,
      mobile,
      phone,
      address,
      dateOfBirth,
      occupationRating,
      smoker,
      avatar,
      advisor,
      profilePicture,
      role,
      policiesRisk,
      policiesAsset,
      policiesKiwisaver,
      policiesPet
    }
  } else {
    return null
  }
}

export const createVariablesCreateUser = ({
  username,
  password,
  email,
  role
}) => ({
  username,
  password,
  email,
  roles: [role]
})


export const profilePicture = (userProfile: TUserProfile): string =>
  (userProfile.profilePicture !== "EMPTY"
    ? userProfile.profilePicture 
    : null)
  || userProfile?.avatar?.url


export const userName = (userProfile: TUserProfile) => {
  if (userProfile) {
    const { username, firstName, lastName } = userProfile
    if (firstName) {
      if (firstName && lastName) {
        return `${firstName} ${lastName}`
      } else {
        return `${firstName}`
      }
    } else {
      return `${username}`
    }
  } else {
    return null
  }
}
