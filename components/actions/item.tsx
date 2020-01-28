import * as React from "react"
import styled from "styled-components"
import { UserItemInfoWrapper } from "./item-info-wrapper"
import { EAction, IActionConfig } from "../../models"
import { ItemControls } from "./item-controls"
import { Edit, Delete, Close } from "@material-ui/icons"
import { color } from "../../data"

const Wrapper = styled.li`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-top: 12px;
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
  editConfig?: TEditConfig
  onSetDelete?(): void
  children: JSX.Element
}

export const Item = (props: TProps) => {
  const { id, children, actionConfig, editConfig, onSetDelete } = props
  return (
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
                icon: editConfig.isEditing ? <Close /> : <Edit />,
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
  )
}
