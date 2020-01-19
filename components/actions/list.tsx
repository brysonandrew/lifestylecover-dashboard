import React from "react"
import styled from "styled-components"
import { Item } from "./item"
import { IActionConfig, EAction } from "../../models"
import { AddItemWithControls } from "./add-item-with-controls"
import { DeleteModal } from "./delete-modal"
import { EMPTY_CONFIG } from "."
import { PaperWrapper } from "../../common/paper-wrapper"
import { ListDivider } from "../../common/list-divider"

const ListWrapper = styled.ul`
`

type TAddConfig = {
  inputs: string[]
  onAdd(values: any): void
}

type TDeleteConfig = {
  component(values: any): JSX.Element
  onDelete(values: any): void
}

type TItem = {
  id: string
  displayComponent: JSX.Element
  editComponent: JSX.Element
}

type TProps = {
  addConfig: TAddConfig
  deleteConfig?: TDeleteConfig
  children: TItem[]
}

export const List = (props: TProps) => {
  const { addConfig, deleteConfig, children } = props
  const [actionConfig, onSetActionConfig] = React.useState<IActionConfig>({ action: null, info: null })
  const { action, info } = actionConfig

  const handleReset = () => onSetActionConfig(EMPTY_CONFIG)
  const handleSetAdd = () => onSetActionConfig(action === EAction.Add ? EMPTY_CONFIG : { action: EAction.Add, info: {} })
  const handleSetEdit = (info) => onSetActionConfig(action === EAction.Edit ? EMPTY_CONFIG : { action: EAction.Edit, info })
  const handleSetDelete = deleteConfig && (
    () => onSetActionConfig(action === EAction.Add ? EMPTY_CONFIG : { action: EAction.Delete, info })
  )

  const renderItemChildren = (isEditing, itemInfo) => (
    itemInfo.component(isEditing)
  )

  return (
    <>
      <ListWrapper>
        {addConfig && (
          <>
            <AddItemWithControls
              inputs={addConfig.inputs}
              actionConfig={actionConfig}
              onUnsetAdd={() => handleReset()}
              onSetAdd={handleSetAdd}
              onSubmitClick={addConfig.onAdd}
            />
            <ListDivider />
          </>
        )}
        {children && children.map((itemInfo, index) => {
          const isEditing = action === EAction.Edit && info.id === itemInfo.id
          return (
            <React.Fragment key={itemInfo.id}>
              {index !== 0 && <ListDivider />}
              <Item
                id={itemInfo.id}
                actionConfig={actionConfig}
                editConfig={{
                  isEditing,
                  onSet: () => handleSetEdit(itemInfo),
                }}
                onSetDelete={handleSetDelete}
              >
                {renderItemChildren(isEditing, itemInfo)}
              </Item>
            </React.Fragment>
          )
        })}
        <>
          {deleteConfig && action === EAction.Delete && (
            <DeleteModal
              onDeleteClick={() => {
                deleteConfig.onDelete(info)
                handleReset()
              }}
              onCloseClick={() => handleReset()}
            >
              {deleteConfig.component(info)}
            </DeleteModal>
          )}
        </>
      </ListWrapper>
    </>
  )
}
