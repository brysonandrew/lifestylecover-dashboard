import React from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/react-hooks"
import { USER_GET_LIST_QUERY } from "../../utils/graphql/user-get-list.query"
import { CircularProgress } from "@material-ui/core"
import { UserItem } from "./user-item"
import { DeleteModal } from "./delete-modal"
import { IActionConfig, EAction } from "../../models"
import { AddItemWithControls } from "./add-item-with-controls"
import { LoadingCentered } from "../../common/loading"
import { layoutSizes } from "../../data"

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
                actionConfig={actionConfig}
                onUnsetAdd={() => onSetActionConfig({ action: null, userInfo: {} })}
                onSetAdd={() => onSetActionConfig({ action: EAction.Add, userInfo: {} })}
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
