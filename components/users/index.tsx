import React from "react"
import styled from "styled-components"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { USER_GET_LIST_QUERY } from "../../utils/graphql/user-get-list.query"
import { LoadingCentered } from "../../common/loading"
import { USER_CREATE_MUTATION } from "../../utils/graphql/user-create.mutation"
import { List } from "../actions/list"

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

type TProps = {}

export const Users = (props: TProps) => {
  const { loading, error, data } = useQuery(USER_GET_LIST_QUERY, {});
  const [onSaveNewUser, updateConfig] = useMutation(USER_CREATE_MUTATION);

  return (
    <Wrapper>
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
              onAdd: (values) => onSaveNewUser({ variables: { username: values.username, email: values.email } })
            }}
          >
            {data.users.edges.map(edge => ({
              id: edge.node.id,
              displayComponent: (
                <div>
                  display
                    {edge.node.id}
                </div>
              ),
              editComponent: (
                <div>
                  edit
                    {edge.node.id}
                </div>
              )
            }))}
          </List>
        )}
    </Wrapper>
  )
}
