import * as React from "react"
import styled from "styled-components"
import { TextField, Radio } from "../../common"
import { placeholder } from "../../data-placeholders"

const RadioWrapper = styled.div`
  margin-top: 12px;
`

export const UserCreateInputs = () => {
  return (
    <>
      <TextField
        label="Username"
        placeholder={placeholder.user.unknown}
        name="username"
      />
      <TextField
        label="Email"
        placeholder={placeholder.user.unknown}
        name="email"
      />
      <TextField
        label="Password"
        placeholder={placeholder.user.unknown}
        name="password"
        type="password"
      />
      <RadioWrapper>
        {['client', 'advisor'].map((role) => (
          <Radio
            key={role}
            name="role"
            type="radio"
            value={role}
            label={role}
          />
        ))}
      </RadioWrapper>
    </>
  )
}
