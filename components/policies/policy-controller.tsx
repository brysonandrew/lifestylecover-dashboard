import * as React from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/react-hooks"
import { List } from ".."
import { POLICY_GET_RISK_LIST_QUERY } from "../../utils"
import { TUserProfile } from "../../models"
import { PolicyEditableForm } from "./policy-editable-form"


type TProps = {
  inputs: any
  userProfile: TUserProfile
  updateMutation: any
  createMutation?: any
  deleteMutation?: any
  children: React.ReactNode
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
        ...edge.node,
        component: (isEditing: boolean) => (
          <PolicyEditableForm
            key={edge.node.id}
            isEditing={isEditing}
            policyInfo={edge.node}
            initValues={inputs}
            mutation={updateMutation}
          >
            {children}
          </PolicyEditableForm>
        )
      }))}
    </List>
  )
}
