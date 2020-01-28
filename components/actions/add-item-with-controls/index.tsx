import * as React from "react"
import styled from "styled-components"
import { ItemControls } from "../item-controls"
import { EAction, IActionConfig, TAddConfig } from "../../../models"
import { Add, Cancel } from "@material-ui/icons"
import { motion } from "framer-motion"
import { AddItemForm } from "./add-item-form"
import { ModalCentered } from "../../../common"

const Wrapper = styled(motion.li)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  padding: 12px 0;
`

type TProps = {
  addConfig: TAddConfig
  actionConfig: IActionConfig
  onSetAdd(): void
  onUnsetAdd(): void
}

export const AddItemWithControls = (props: TProps) => {
  const { addConfig, actionConfig, onSetAdd, onUnsetAdd } = props

  const isAddOpen = actionConfig.action === EAction.Add

  return (
    <Wrapper>
      {isAddOpen && (
        <ModalCentered onBackdropClick={onUnsetAdd}>
          <AddItemForm addConfig={addConfig} onUnsetAdd={onUnsetAdd} />
        </ModalCentered>
      )}
      <ItemControls>
        {[
          isAddOpen
            ? {
                action: EAction.Save,
                callback: onUnsetAdd,
                icon: <Cancel />,
              }
            : {
                action: EAction.Add,
                callback: onSetAdd,
                icon: <Add />,
              },
        ]}
      </ItemControls>
    </Wrapper>
  )
}
