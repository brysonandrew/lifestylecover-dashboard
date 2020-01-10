import * as yup from "yup"

export const validationSchema = yup.object({
  email: yup
    .string()
    .required()
    .max(20),
  password: yup
    .string()
    .required()
    .max(40),
})
