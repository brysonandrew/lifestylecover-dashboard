import * as React from "react"
import styled from "styled-components"
import { List } from ".."
import { TUserProfile } from "../../models"
import { PolicyEditableForm } from "./policy-editable-form"
import { FormText } from "../../common/text-ui/form-text"
import { initializeFormValues } from "../../utils"


type TProps = {
  inputs: any
  arrayInputs?: any
  userProfile: TUserProfile
  updateMutation: any
  createMutation?: any
  deleteMutation?: any
  children: JSX.Element
  edges: any[]
}

export const PolicyController = (props: TProps) => {
  const { inputs, arrayInputs, edges, children, createMutation, deleteMutation, updateMutation, userProfile } = props
  return (
    <List
      addConfig={
        createMutation
          ? {
            inputs,
            createVariables: (values) => ({ title: values.title }),
            createMutation,
            componentInputs: children
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
                userProfile={userProfile}
                initFormValues={inputs}
                initArrayValues={arrayInputs}
                mutation={updateMutation}
              >
                {children}
              </PolicyEditableForm>
            )
          } else {
            return (
              <FormText arrayInputs={arrayInputs}>
                {initializeFormValues(edge.node, inputs, arrayInputs)}
              </FormText>
            )
          }
        }
      }))}
    </List>
  )
}
