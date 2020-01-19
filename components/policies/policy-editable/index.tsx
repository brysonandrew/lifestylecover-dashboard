import * as React from "react"
import styled from "styled-components"
import { TPolicy } from "../../../models/users"
import { PolicyEditableForm } from "./policy-editable-form"

const Wrapper = styled.div`
`

type TProps = {
  isEditing: boolean
  policyInfo: TPolicy
}

export const PolicyEditable = (props: TProps) => {
  const { isEditing, policyInfo } = props
  return (
    <Wrapper>
      <h2>Policy</h2>
      <PolicyEditableForm isEditing={isEditing} policyInfo={policyInfo} />
    </Wrapper>
  )
}
