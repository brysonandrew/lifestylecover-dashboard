import React from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/react-hooks"
import { USER_GET_LIST_QUERY } from "../../utils/graphql/user-get-list.query"
import { CircularProgress } from "@material-ui/core"
import { UserItem } from "./user-item"
import { DeleteModal } from "./delete-modal"
import { IUserActionConfig, EUserAction } from "../../models/users"
import { AddUserItem } from "./add-user-item"

const Wrapper = styled.div`
  
`

const List = styled.ul`
  width: calc(100% - 80px);
  margin: 40px auto 0;
`

type TProps = {}

export const Users = (props: TProps) => {
  const { loading, error, data } = useQuery(USER_GET_LIST_QUERY, {});
  const [actionConfig, onSetActionConfig] = React.useState<IUserActionConfig>({ action: null, userInfo: null })
  return (
    <Wrapper>
      <>
        {loading
          ? <CircularProgress />
          : (
            <List>
              <AddUserItem
                actionConfig={actionConfig}
                onUnsetAdd={() => onSetActionConfig({ action: null, userInfo: {} })}
                onSetAdd={() => onSetActionConfig({ action: EUserAction.Add, userInfo: {} })}
              />
              {data.users.edges.map(edge => (
                <UserItem
                  key={edge.node.id}
                  userInfo={edge.node}
                  actionConfig={actionConfig}
                  onSetEdit={() => onSetActionConfig({ action: EUserAction.Edit, userInfo: edge.node })}
                  onSetDelete={() => onSetActionConfig({ action: EUserAction.Delete, userInfo: edge.node })}
                />
              ))}
            </List>
          )}
      </>
      <>
        {actionConfig.action === EUserAction.Delete && (
          <DeleteModal {...actionConfig.userInfo} />
        )}
      </>
    </Wrapper>
  )
}
