
import * as React from "react"
import styled from "styled-components"
import { List } from ".."
import { TUserProfile, TEditConfig } from "../../models"
import { defined } from "../../utils"
import { NoneFound } from "../actions/none-found"
import { PolicyEditable } from "./policy-editable"


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
    const { title, author, ...meta } = values
    return {
      title,
      author: {
        username: author
      },
      meta: JSON.stringify(meta)
    }
  }
  if (!defined(edges) && edges.length === 0) {
    return (
      <NoneFound>
        Something went wrong and the items could not be fetched.
      </NoneFound>
    )
  } else {
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
          userRole: userProfile.role,
          component: (editConfig: TEditConfig) => {
            return (
              <PolicyEditable
                key={edge.node.id}
                editConfig={editConfig}
                inputs={inputs}
                arrayInputs={arrayInputs}
                policyInfo={edge.node}
                userProfile={userProfile}
                updateMutation={updateMutation}
                createVariables={createVariables}
                refetch={refetch}
              >
                {children}
              </PolicyEditable>
            )
          }
        }))}
      </List>
    )
  }
} 
