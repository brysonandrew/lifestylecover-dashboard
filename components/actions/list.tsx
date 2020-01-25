import React from "react"
import styled from "styled-components"
import { Item } from "./item"
import { IActionConfig, EAction, TAddConfig, TDeleteConfig, TItem } from "../../models"
import { AddItemWithControls } from "./add-item-with-controls"
import { DeleteModal } from "./delete-modal"
import { EMPTY_CONFIG } from "."
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
  const [actionConfig, onSetActionConfig] = React.useState<IActionConfig>({ action: null, info: null })
  const { action, info } = actionConfig

  const handleReset = () => onSetActionConfig(EMPTY_CONFIG)
  const handleSetAdd = () => onSetActionConfig(action === EAction.Add ? EMPTY_CONFIG : { action: EAction.Add, info: {} })
  const handleSetEdit = (itemInfo) => onSetActionConfig(action === EAction.Edit ? EMPTY_CONFIG : { action: EAction.Edit, info: itemInfo })
  const handleSetDelete = deleteConfig && (
    (itemInfo) => onSetActionConfig(action === EAction.Add ? EMPTY_CONFIG : { action: EAction.Delete, info: itemInfo })
  )

  const renderItemChildren = (isEditing, item) => (
    item.component(isEditing)
  )

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
        {children && children.map((item, index) => {
          const isEditing = action === EAction.Edit && info.id === item.id
          return (
            <React.Fragment key={item.id}>
              {index !== 0 && <ListDivider />}
              <Item
                id={item.id}
                actionConfig={actionConfig}
                editConfig={{
                  isEditing,
                  onSet: () => handleSetEdit(item),
                }}
                onSetDelete={handleSetDelete ? (() => handleSetDelete(item)) : null}
              >
                {renderItemChildren(isEditing, item)}
              </Item>
            </React.Fragment>
          )
        })}
        <>
          {deleteConfig && action === EAction.Delete && (
            <DeleteModal
              info={info}
              deleteConfig={deleteConfig}
              onClose={() => handleReset()}
            >
              <DeleteContent>
                {deleteConfig.deleteText(info)}
              </DeleteContent>
            </DeleteModal>
          )}
        </>
      </ListWrapper>
    </>
  )
}
