import { formatDate } from "."

export const createUserProfile = (user) => {
  if (user) {
    let {
      id,
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
      roles,
      policiesRisk,
      policiesAsset,
      policiesKiwisaver,
      policiesPet
    } = user
    const role = roles?.nodes[0]?.name
    dateOfBirth = formatDate(dateOfBirth)
    return {
      id,
      username,
      firstName,
      lastName,
      mobile,
      phone,
      address,
      dateOfBirth,
      occupationRating,
      smoker,
      email,
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
