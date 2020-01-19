import * as React from "react"
import styled from "styled-components"
import { layoutSizes } from "../../data"
import { ItemControls } from "./item-controls"
import { EAction, IActionConfig } from "../../models"
import { Add, Cancel } from "@material-ui/icons"
import { motion, AnimatePresence } from "framer-motion"
import { Paper } from "@material-ui/core"
import { AddItemForm } from "./add-item-form"

const Wrapper = styled(motion.li)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  padding-bottom: 12px;
`

const Info = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: calc(100% - ${layoutSizes.content.button.width - 8}px);
  margin-right: 8px;
`

type TProps = {
  inputs: string[]
  actionConfig: IActionConfig
  onSetAdd(): void
  onUnsetAdd(): void
  onSubmitClick(formValues): void
}

export const AddItemWithControls = (props: TProps) => {
  const { inputs, actionConfig, onSetAdd, onUnsetAdd, onSubmitClick } = props
  const isAddOpen = actionConfig.action === EAction.Add

  return (
    <Wrapper>
      <AnimatePresence>
        {isAddOpen && (
          <Info
            key="Info"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ ease: 'linear', duration: 0.1 }}
          >
            <Paper square={false} elevation={2}>
              <AddItemForm
                updateConfig
                inputs={inputs}
                onSubmitClick={onSubmitClick}
              />
            </Paper>
          </Info>
        )}
      </AnimatePresence>
      <ItemControls {...props}>
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
            }
        ]}
      </ItemControls>
    </Wrapper>
  )
}
