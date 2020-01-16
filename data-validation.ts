import * as yup from "yup"

export const loginValidationSchema = yup.object({
  username: yup
    .string()
    .required()
    .max(20),
  password: yup
    .string()
    .required()
    .max(40),
})

export const addUserValidationSchema = yup.object({
  name: yup
    .string()
    .required()
    .max(20),
})

export const createUserValidationSchema = yup.object({
  username: yup
    .string()
    .required()
    .max(20),
  password: yup
    .string()
    .required()
    .max(20),
  'user-type': yup
    .string()
    .required(),
})

export const createPolicyValidationSchema = yup.object({
  referenceNumber: yup
    .string()
    .required()
    .max(20)
})
