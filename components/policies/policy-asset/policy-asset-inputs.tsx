import React from "react"
import styled from "styled-components"
import { TextField } from "../../../common"
import { placeholder } from "../../../data-placeholders"

export const PolicyAssetInputs = () => {
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
