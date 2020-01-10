import * as React from "react"
import { TextField } from "../common/inputs"
import { FormWrapper } from "../common/wrapper"
import { PLACEHOLDER_LOOKUP } from "../data"

export const Login = () => {
  return (
    <FormWrapper>
      <TextField
        label="username"
        placeholder={PLACEHOLDER_LOOKUP.username}
        name="username"
      />
      <TextField
        label="password"
        placeholder={PLACEHOLDER_LOOKUP.password}
        name="password"
        type="password"
      />
    </FormWrapper>
  )
}
