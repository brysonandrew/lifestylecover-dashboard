import React from "react"
import styled from "styled-components"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { USER_GET_LIST_QUERY } from "../../utils/graphql/user-get-list.query"
import { LoadingCentered } from "../../common/loading"
import { USER_CREATE_MUTATION } from "../../utils/graphql/user-create.mutation"
import { List } from "../actions/list"
import { USER_DELETE_MUTATION } from "../../utils"
import { TUserProfile } from "../../models/users"
import { PageWrapper } from "../../common/page-wrapper"

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

type TProps = {}

export const Users = (props: TProps) => {
  const { loading, error, data: getListData } = useQuery(USER_GET_LIST_QUERY, {});
  const [onCreateUser, userCreateMutation] = useMutation(USER_CREATE_MUTATION);
  const [onDeleteUser, userDeleteMutation] = useMutation(USER_DELETE_MUTATION);

  return (
    <PageWrapper title="Users">
      {loading
        ? (
          <LoadingCentered />
        )
        : (
          <List
            addConfig={{
              inputs: [
                'username',
                'email'
              ],
              onAdd: (values: TUserProfile) => onCreateUser({ variables: { username: values.username, email: values.email } })
            }}
            deleteConfig={{
              component: (values: TUserProfile) => (
                <h2>{`Are you sure you want to delete user ${values.username}?`}</h2>
              ),
              onDelete: () => onDeleteUser
            }}
          >
            {getListData && getListData.users.edges.map(edge => ({
              id: edge.node.id,
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
