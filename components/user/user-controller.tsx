import React from "react"
import { List } from "../actions/list"
import { TUserProfile, TEditConfig } from "../../models"
import { createVariablesCreateUser } from "../../utils"
import { UserCreateInputs } from "./user-create-inputs"
import { CREATE_USER_INIT } from "../../data-initial-values-user"

type TProps = {
  refetch(): void
  inputs: any
  userProfile: TUserProfile
  updateMutation?: any
  createMutation?: any
  deleteMutation?: any
  edges: any[]
}

export const UserController = (props: TProps) => {
  const { inputs, edges, createMutation, deleteMutation, refetch } = props
  return (
    <List
      addConfig={{
        refetch,
        inputs: CREATE_USER_INIT,
        createVariables: (values) => createVariablesCreateUser(values),
        createMutation,
        componentInputs: (
          <UserCreateInputs/>
        )
      }}
      deleteConfig={{
        refetch,
        deleteText: (values) => `user ${values.username}`,
        deleteMutation
      }}
    >
      {edges.map(edge => ({
        itemInfo: edge.node,
        component: (editConfig: TEditConfig) => (
          <div>
            <h2>{edge.node.username}</h2>
            {/* <UserEditable
              isEditing={isEditing}
              user={edge.node}
            /> */}
          </div>
        )
      }))}
    </List>
  )
}
