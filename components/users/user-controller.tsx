import React from "react"
import { List } from "../actions/list"
import { TUserProfile } from "../../models"
import { ProfileContactUpdateForm } from "../profile"
import { FormDisabled } from "../../common/form-disabled"
import { initializeFormValues } from "../../utils"

type TProps = {
  inputs: any
  userProfile: TUserProfile
  updateMutation?: any
  createMutation?: any
  deleteMutation?: any
  edges: any[]
}

export const UserController = (props: TProps) => {
  const { inputs, edges, createMutation, deleteMutation } = props
  return (
    <List
      addConfig={{
        inputs,
        createVariables: (values) => ({ username: values.username, email: values.email }),
        createMutation
      }}
      deleteConfig={{
        deleteText: (values) => `user ${values.username}`,
        deleteMutation
      }}
    >
      {edges.map(edge => ({
        itemInfo: edge.node,
        component: (isEditing: boolean) => (
          <div>
            <h2>{edge.node.username}</h2>
            {isEditing
              ? (
                <ProfileContactUpdateForm
                  userProfile={edge.node}
                />
              )
              : (
                <FormDisabled>
                  {initializeFormValues(inputs, edge.node)}
                </FormDisabled>
              )}
          </div>
        )
      }))}
    </List>
  )
}
