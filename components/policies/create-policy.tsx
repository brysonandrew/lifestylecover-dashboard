import * as React from "react"
import { TextField, Radio } from "../../common/inputs"
import { FormWrapper } from "../../common/form-wrapper"
import { CREATE_POLICY_PLACEHOLDER_LOOKUP } from "../../data-placeholders"

enum EUserType {
  administrator = 'administrator',
  client = 'client',
  advisor = 'advisor',
}

type TProps = {
  userType?: EUserType
}

export const CreatePolicy = (props: TProps) => {
  return (
    <FormWrapper>
      <TextField
        label="referenceNumber"
        placeholder={CREATE_POLICY_PLACEHOLDER_LOOKUP.referenceNumber}
        name="referenceNumber"
      />
    </FormWrapper>
  )
}
