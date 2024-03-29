import React from "react"
import styled from "styled-components"
import { TextField } from "../../common/inputs"
import { LOGIN_PLACEHOLDER_LOOKUP } from "../../data-placeholders"
import { color } from "../../data"
import { sizes } from "../../utils-viewport"

const Wrapper = styled.div`
  position: relative;
  background-color: ${color.offWhite};
  margin-top: 12px;
  padding: 12px;
  border-radius: 4px;
  color: ${color.black};
  text-align: left;
  box-shadow: none;
  font-size: 28px;
  ${sizes.mobileLg`
    box-shadow: inset 0 0 2px 1px ${color.black};
 `}
`

export const LoginInputs = () => {
  return (
    <Wrapper>
      <div>
      advisor
      </div>
      <div>
      QYclifyw%2^OCMbUJcaG4M!r
      </div>
      <div>
      client
      </div>
      <div>
      Y0sgitjVovA@sD)EeRUJmReb
      </div>
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
    </Wrapper>
  )
}
