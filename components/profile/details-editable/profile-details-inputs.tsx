import * as React from "react"
import styled from "styled-components"
import { TextField, Radio, Checkbox } from "../../../common"
import { placeholder } from "../../../data-placeholders"

const Wrapper = styled.div`
  text-align: left;
`

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const CheckboxLabel = styled.div`
  font-size: 14px;
`

export const ProfileDetailsInputs = () => {
  return (
    <Wrapper>
      <TextField
        label="Date of Birth"
        placeholder={placeholder.user.unknown}
        type="date"
        name="dateOfBirth"
      />
      <TextField
        label="Occupation Rating"
        placeholder={placeholder.user.unknown}
        name="occupationRating"
      />
      <CheckboxWrapper>
        <CheckboxLabel>
          Smoker
        </CheckboxLabel>
        <Checkbox
          name="smoker"
        />
      </CheckboxWrapper>

      {/* <TextField
        label="Email"
        placeholder={placeholder.user.unknown}
        name="email"
      /> */}
    </Wrapper>
  )
}
