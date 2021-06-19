import React from "react"
import { TextField } from "../../common"
import { placeholder } from "../../data-placeholders"
import { EFormType } from "../../models"

type TProps = {
  isClient?: boolean
  formType?: EFormType
  children: JSX.Element
}

export const PolicyFixedInputs = ({ isClient, formType, children }: TProps) => {
  return (
    <>
      {formType === EFormType.Add && (
        <TextField
          label="Client's username"
          placeholder={placeholder.user.unknown}
          name="author"
        />
      )}
      <TextField
        label="Reference Number"
        placeholder={placeholder.user.unknown}
        disabled={isClient}
        name="title"
      />
      {children}
    </>
  )
}
