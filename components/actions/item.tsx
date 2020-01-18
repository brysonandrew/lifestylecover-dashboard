import * as React from "react"
import styled from "styled-components"
import { UserItemInfoWrapper } from "./item-info-wrapper"
import { EAction, IActionConfig } from "../../models"
import { Edit, Delete, Close } from "@material-ui/icons"
import { Paper } from "@material-ui/core"
import { ItemControls } from "./item-controls"

const Wrapper = styled.li`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 8px;
  &:first-child {
    margin-top: 0;
  }
`

type TEditConfig = {
  isEditing: boolean
  onSet(): void
}

type TProps = {
  id: string
  actionConfig: IActionConfig
  editConfig: TEditConfig
  onSetDelete?(): void
  children: JSX.Element
}

export const Item = (props: TProps) => {
  const { id, children, actionConfig, editConfig, onSetDelete } = props
  return (
    <Paper style={{ marginTop: 8 }} elevation={2}>
      <Wrapper>
        <UserItemInfoWrapper>
          {children}
        </UserItemInfoWrapper>
        {(editConfig || onSetDelete) && (
          <ItemControls>
            {[
              ...(editConfig
                ? [{
                  action: EAction.Edit,
                  callback: editConfig.onSet,
                  icon: editConfig.isEditing ? <Close/> : <Edit />,
                }]
                : []),
              ...(onSetDelete
                ? [{
                  action: EAction.Delete,
                  callback: onSetDelete,
                  icon: <Delete />,
                }]
                : []
              )
            ]}
          </ItemControls>
        )}
      </Wrapper>
    </Paper>
  )
}
