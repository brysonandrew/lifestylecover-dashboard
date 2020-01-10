import * as yup from "yup"

export const validationSchema = yup.object({
  username: yup
    .string()
    .required()
    .max(20),
  password: yup
    .string()
    .required()
    .max(20),
})
