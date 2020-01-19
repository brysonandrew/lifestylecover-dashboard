import React from "react"
import styled from "styled-components"
import { FormWrapper, TextField } from "../../../common"
import { placeholder } from "../../../data-placeholders"
import { Paper } from "@material-ui/core"

export const PolicyEditableInputs = () => {
  return (
    <>
      <TextField
        label="Title"
        placeholder={placeholder.user.unknown}
        name="title"
      />
    </>
  )
}
