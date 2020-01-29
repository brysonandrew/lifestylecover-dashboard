
import * as React from "react"
import styled from "styled-components"
import { List } from ".."
import { TUserProfile } from "../../models"
import { PolicyEditableForm } from "./policy-editable-form"
import { FormText } from "../../common/text-ui/form-text"
import { initializeFormValues } from "../../utils"


type TProps = {
  refetch(): void
  inputs: any
  arrayInputs?: any
  userProfile: TUserProfile
  updateMutation: any
  createMutation?: any
  deleteMutation?: any
  children: JSX.Element
  edges: any[]
}

export const PolicyList = (props: TProps) => {
  const { refetch, inputs, arrayInputs, edges, children, createMutation, deleteMutation, updateMutation, userProfile } = props
  const createVariables = (values) => {
    const { title, ...meta } = values
    return {
      title,
      meta: JSON.stringify(meta)
    }
  }
  console.log(edges)
  return (
    <List
      addConfig={
        createMutation
          ? {
            refetch,
            inputs,
            createVariables,
            createMutation,
            componentInputs: children
          }
          : null}
      deleteConfig={
        deleteMutation
          ? {
            refetch,
            deleteText: (values) => `policy ${values.title}`,
            deleteMutation
          }
          : null}
    >
      {edges.map(edge => ({
        itemInfo: edge.node,
        component: (isEditing: boolean) => {
          const initValues = initializeFormValues(edge.node, inputs, arrayInputs)
          if (isEditing) {
            return (
              <PolicyEditableForm
                key={edge.node.id}
                policyInfo={edge.node}
                userProfile={userProfile}
                initValues={initValues}
                initArrayValues={arrayInputs}
                mutation={updateMutation}
                createVariables={createVariables}
                refetch={refetch}
              >
                {children}
              </PolicyEditableForm>
            )
          } else {
            return (
              <FormText arrayInputs={arrayInputs}>
                {initValues}
              </FormText>
            )
          }
        }
      }))}
    </List>
  )
} 
