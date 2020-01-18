import * as React from "react"
import { FormWrapper, TextField } from "../../../common"
import { placeholder } from "../../../data-placeholders"

export const PolicyEditableInputs = () => {
  return (
    <FormWrapper>
      <TextField
        label="Title"
        placeholder={placeholder.user.unknown}
        name="title"
      />
    </FormWrapper>
  )
}
