import * as React from "react"
import styled from "styled-components"
import { UserItemInfoWrapper } from "./item-info-wrapper"
import { EAction, IActionConfig } from "../../models"
import { Edit, Delete } from "@material-ui/icons"
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

type TProps = {
  id: string
  displayComponent: JSX.Element
  editComponent: (info: any) => JSX.Element
  actionConfig: IActionConfig
  onSetEdit(): void
  onSetDelete(): void
}

export const Item = (props: TProps) => {
  const { editComponent, displayComponent, actionConfig, onSetEdit, onSetDelete } = props
  return (
    <Paper style={{marginTop: 8}} elevation={2}>
      <Wrapper>
        <UserItemInfoWrapper>
          {actionConfig.action === EAction.Edit
            ? (
              editComponent(actionConfig.info)
            )
            : (
              displayComponent
            )}
        </UserItemInfoWrapper>
        <ItemControls>
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
        </ItemControls>
      </Wrapper>
    </Paper>
  )
}
