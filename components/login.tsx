import * as React from "react"
import { TextField } from "../common/inputs"
import { FormWrapper } from "../common/wrapper"
import { PLACEHOLDER_LOOKUP } from "../data"

export const Login = () => {
  return (
    <FormWrapper>
      <h2>Dashboard Login</h2>
      <TextField
        label="name"
        placeholder={PLACEHOLDER_LOOKUP.email}
        name="name"
      />
      <TextField
        label="position"
        placeholder={PLACEHOLDER_LOOKUP.password}
        name="position"
        type="password"
      />
    </FormWrapper>
  )
}
