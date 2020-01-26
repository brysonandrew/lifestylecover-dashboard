import * as React from "react"
import styled from "styled-components"
import { List } from ".."
import { TUserProfile } from "../../models"
import { PolicyEditableForm } from "./policy-editable-form"
import { FormDisabled } from "../../common/form-disabled"
import { initializeFormValues } from "../../utils"


type TProps = {
  inputs: any
  userProfile: TUserProfile
  updateMutation: any
  createMutation?: any
  deleteMutation?: any
  children: JSX.Element
  edges: any[]
}

export const PolicyController = (props: TProps) => {
  const { inputs, edges, children, createMutation, deleteMutation, updateMutation } = props

  return (
    <List
      addConfig={
        createMutation
          ? {
            inputs,
            createVariables: (values) => ({ title: values.title }),
            createMutation
          }
          : null}
      deleteConfig={
        deleteMutation
          ? {
            deleteText: (values) => `policy ${values.title}`,
            deleteMutation
          }
          : null}
    >
      {edges.map(edge => ({
        itemInfo: edge.node,
        component: (isEditing: boolean) => {
          if (isEditing) {
            return (
              <PolicyEditableForm
                key={edge.node.id}
                policyInfo={edge.node}
                initFormValues={inputs}
                mutation={updateMutation}
              >
                {children}
              </PolicyEditableForm>
            )
          } else {
            return (
              <FormDisabled>
                {initializeFormValues(inputs, edge.node)}
              </FormDisabled>
            )
          }
        }
      }))}
    </List>
  )
}
