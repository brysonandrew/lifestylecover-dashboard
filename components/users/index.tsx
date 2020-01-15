import React from "react"
import styled from "styled-components"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { USER_GET_LIST_QUERY } from "../../utils/graphql/user-get-list.query"
import { UserItem } from "./user-item"
import { DeleteModal } from "./delete-modal"
import { IActionConfig, EAction } from "../../models"
import { AddItemWithControls } from "../actions/add-item-with-controls"
import { LoadingCentered } from "../../common/loading"
import { layoutSizes } from "../../data"
import { USER_CREATE_MUTATION } from "../../utils/graphql/user-create.mutation"

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

const List = styled.ul`
  width: calc(100% - 80px);
  margin: ${layoutSizes.nav.row + 40}px auto 0;
`

type TProps = {}

export const Users = (props: TProps) => {
  const { loading, error, data } = useQuery(USER_GET_LIST_QUERY, {});
  const [actionConfig, onSetActionConfig] = React.useState<IActionConfig>({ action: null, userInfo: null })
  const [onSaveNewUser, updateConfig] = useMutation(USER_CREATE_MUTATION);
  console.log(error)

  return (
    <Wrapper>
      <>
        {loading
          ? (
            <LoadingCentered/>
          )
          : (
            <List>
              <AddItemWithControls
                inputs={[
                  'username',
                  'email'
                ]}
                actionConfig={actionConfig}
                onUnsetAdd={() => onSetActionConfig({ action: null, userInfo: {} })}
                onSetAdd={() => onSetActionConfig({ action: EAction.Add, userInfo: {} })}
                onSubmitClick={(values) => onSaveNewUser({ variables: { username: values.username, email: values.email } })}
              />
              {data && data.users.edges.map(edge => (
                <UserItem
                  key={edge.node.id}
                  userInfo={edge.node}
                  actionConfig={actionConfig}
                  onSetEdit={() => onSetActionConfig({ action: EAction.Edit, userInfo: edge.node })}
                  onSetDelete={() => onSetActionConfig({ action: EAction.Delete, userInfo: edge.node })}
                />
              ))}
            </List>
          )}
      </>
      <>
        {actionConfig.action === EAction.Delete && (
          <DeleteModal {...actionConfig.userInfo} />
        )}
      </>
    </Wrapper>
  )
}
