import * as React from "react"
import styled from "styled-components"
import { color } from "../../data"
import { UserItemControls } from "./user-item-controls"
import { UserItemInfoWrapper } from "./user-item-info-wrapper"
import { EAction, IActionConfig } from "../../models"
import { Edit, Delete } from "@material-ui/icons"
import { Paper } from "@material-ui/core"

const Wrapper = styled.li`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 8px;
  &:first-child {
    margin-top: 0;
  }
`

type TProps = {
  userInfo: any
  actionConfig: IActionConfig
  onSetEdit(): void
  onSetDelete(): void
}

export const UserItem = (props: TProps) => {
  const { userInfo, actionConfig, onSetEdit, onSetDelete } = props
  return (
    <Paper style={{marginTop: 8}} elevation={2}>
      <Wrapper>
        <UserItemInfoWrapper>
          <div>User info</div>
        </UserItemInfoWrapper>
        <UserItemControls>
          {[
            {
              action: EAction.Edit,
              callback: onSetEdit,
              icon: <Edit />,
            },
            {
              action: EAction.Delete,
              callback: onSetDelete,
              icon: <Delete />,
            }
          ]}
        </UserItemControls>
      </Wrapper>
    </Paper>
  )
}
