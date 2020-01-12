import * as React from "react"
import { TextField } from "../../common/inputs"
import { FormWrapper } from "../../common/form-wrapper"
import { LOGIN_PLACEHOLDER_LOOKUP } from "../../data-placeholders"

export const LoginInputs = () => {
  return (
    <FormWrapper>
      <TextField
        label="username"
        placeholder={LOGIN_PLACEHOLDER_LOOKUP.username}
        name="username"
      />
      <TextField
        label="password"
        placeholder={LOGIN_PLACEHOLDER_LOOKUP.password}
        name="password"
        type="password"
      />
    </FormWrapper>
  )
}
