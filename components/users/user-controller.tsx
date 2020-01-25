import React from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { List } from "../actions/list"
import { USER_GET_LIST_QUERY, USER_CREATE_MUTATION, USER_DELETE_MUTATION } from "../../utils"
import { LoadingCentered, PageWrapper } from "../../common"

type TProps = {
  createMutation: any
  deleteMutation: any
}

export const UserController = (props: TProps) => {
  const { loading, error, data: getListData } = useQuery(USER_GET_LIST_QUERY, {});
  const createMutation = useMutation(USER_CREATE_MUTATION)
  const deleteMutation = useMutation(USER_DELETE_MUTATION)

  return (
    <PageWrapper title="Users">
      {loading
        ? (
          <LoadingCentered />
        )
        : (
          <List
            addConfig={{
              inputs: {
                username: '',
                email: ''
              },
              createVariables: (values) => ({ username: values.username, email: values.email }),
              createMutation
            }}
            deleteConfig={{
              deleteText: (values) => `user ${values.username}`,
              deleteMutation
            }}
          >
            {getListData && getListData.users.edges.map(edge => ({
              ...edge.node,
              component: (isEditing: boolean) => (
                <div>
                  {isEditing ? edge.node.id : 'hey'}
                </div>
              )
            }))}
          </List>
        )}
    </PageWrapper>
  )
}
 