import React from "react"
import styled from "styled-components"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { USER_GET_LIST_QUERY } from "../../utils/graphql/user-get-list.query"
import { Item } from "./item"
import { IActionConfig, EAction } from "../../models"
import { AddItemWithControls } from "./add-item-with-controls"
import { layoutSizes } from "../../data"
import { USER_CREATE_MUTATION } from "../../utils/graphql/user-create.mutation"
import { DeleteModal } from "./delete-modal"

const Wrapper = styled.ul`
  width: calc(100% - 80px);
  margin: ${layoutSizes.nav.row + 40}px auto 0;
`

type TAddConfig = {
  inputs: string[]
  onAdd(values: any): void
}

type TItem = {
  id: string
  displayComponent: JSX.Element
  editComponent: (info: any) => JSX.Element
}

type TProps = {
  addConfig: TAddConfig
  children: TItem[]
}

export const List = (props: TProps) => {
  const { addConfig, children } = props
  const [actionConfig, onSetActionConfig] = React.useState<IActionConfig>({ action: null, info: null })

  return (
    <Wrapper>
      {addConfig && (
        <AddItemWithControls
          inputs={addConfig.inputs}
          actionConfig={actionConfig}
          onUnsetAdd={() => onSetActionConfig({ action: null, info: {} })}
          onSetAdd={() => onSetActionConfig({ action: EAction.Add, info: {} })}
          onSubmitClick={addConfig.onAdd}
        />
      )}
      {children && children.map(info => (
        <Item
          key={info.id}
          {...info}
          actionConfig={actionConfig}
          onSetEdit={() => onSetActionConfig({ action: EAction.Edit, info })}
          onSetDelete={() => onSetActionConfig({ action: EAction.Delete, info })}
        />
      ))}
      <>
        {actionConfig.action === EAction.Delete && (
          <DeleteModal {...actionConfig.info} />
        )}
      </>
    </Wrapper>
  )
}
