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
