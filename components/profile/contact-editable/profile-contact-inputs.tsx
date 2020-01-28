import * as React from "react"
import styled from "styled-components"
import { TextField } from "../../../common"
import { placeholder } from "../../../data-placeholders"

const Wrapper = styled.div`
  text-align: left;
`

type TProps = {}

export const ProfileContactInputs = () => {
  return (
    <Wrapper>
      <TextField
        label="Email"
        placeholder={placeholder.user.unknown}
        name="email"
      />
      <TextField
        label="Mobile"
        placeholder={placeholder.user.unknown}
        name="mobile"
      />
      <TextField
        label="Phone"
        placeholder={placeholder.user.unknown}
        name="phone"
      />
      <TextField
        label="Address"
        placeholder={placeholder.user.unknown}
        name="address"
        multiline
        rows={3}
      />
      {/* <TextField
        label="Email"
        placeholder={placeholder.user.unknown}
        name="email"
      /> */}
    </Wrapper>
  )
}
