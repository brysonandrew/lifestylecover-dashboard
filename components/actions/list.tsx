import React from "react"
import styled from "styled-components"
import { Item } from "./item"
import { IActionConfig, EAction, TAddConfig, TDeleteConfig, TItem } from "../../models"
import { AddItemWithControls } from "./add-item-with-controls"
import { DeleteModal } from "./delete-modal"
import { EMPTY_ACTION_CONFIG } from "."
import { ListDivider } from "../../common"
import { DeleteContent } from "./delete-content"

const ListWrapper = styled.ul`
`

type TProps = {
  addConfig: TAddConfig
  deleteConfig?: TDeleteConfig
  children: TItem[]
}

export const List = (props: TProps) => {
  const { addConfig, deleteConfig, children } = props
  const [actionConfig, onSetActionConfig] = React.useState<IActionConfig>(EMPTY_ACTION_CONFIG)
  const { action, actionInfo } = actionConfig

  const handleReset = () => onSetActionConfig(EMPTY_ACTION_CONFIG)
  const handleSetAdd = () => onSetActionConfig(action === EAction.Add ? EMPTY_ACTION_CONFIG : { action: EAction.Add, actionInfo: {} })
  const handleSetEdit = (itemInfo) => onSetActionConfig(action === EAction.Edit ? EMPTY_ACTION_CONFIG : { action: EAction.Edit, actionInfo: itemInfo })
  const handleSetDelete = deleteConfig && (
    (itemInfo) => onSetActionConfig(action === EAction.Add ? EMPTY_ACTION_CONFIG : { action: EAction.Delete, actionInfo: itemInfo })
  )
  console.log(action)

  return (
    <>
      <ListWrapper>
        {addConfig && (
          <>
            <AddItemWithControls
              addConfig={addConfig}
              actionConfig={actionConfig}
              onUnsetAdd={() => handleReset()}
              onSetAdd={handleSetAdd}
            />
            <ListDivider />
          </>
        )}
        {children && children.map((child, index) => {
          const { component, itemInfo } = child
          const isEditing = action === EAction.Edit && itemInfo.id === actionInfo.id
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
                onSetDelete={handleSetDelete ? (() => handleSetDelete(itemInfo)) : null}
              >
                {component(isEditing)}
              </Item>
            </React.Fragment>
          )
        })}
        <>
          {deleteConfig && action === EAction.Delete && (
            <DeleteModal
              info={actionInfo}
              deleteConfig={deleteConfig}
              onClose={() => handleReset()}
            >
              <DeleteContent>
                {deleteConfig.deleteText(actionInfo)}
              </DeleteContent>
            </DeleteModal>
          )}
        </>
      </ListWrapper>
    </>
  )
}
