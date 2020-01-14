import * as React from "react"
import styled from "styled-components"
import { color, layoutSizes } from "../../data"
import { UserItemControls } from "./user-item-controls"
import { UserItemInfoWrapper } from "./user-item-info-wrapper"
import { EAction, IActionConfig } from "../../models"
import { Add, Save, Cancel } from "@material-ui/icons"
import { useMutation } from "@apollo/react-hooks"
import { USER_CREATE_MUTATION } from "../../utils/graphql/user-create.mutation"
import { Formik, Form } from "formik"
import { addUserValidationSchema } from "../../data-validation"
import { TextFieldSmall } from "../../common/inputs/text-field-small"
import { placeholder } from "../../data-placeholders"
import { motion, AnimatePresence } from "framer-motion"
import { SubmitButton } from "../../common/buttons/submit-button"
import { Button, CircularProgress, Paper } from "@material-ui/core"
import { ErrorDisplay } from "./error-display"
import { AddItemForm } from "./add-item-form"

const INIT = {
  username: 'x',
  email: 'x@gmail.com'
}

const Wrapper = styled(motion.li)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  padding-right: 8px;
`

const Info = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: calc(100% - ${layoutSizes.content.button.width - 8}px);
  margin-right: 8px;
`

const FormInner = styled(motion.div)`
  padding-bottom: 8px;
`

type TProps = {
  actionConfig: IActionConfig
  onSetAdd(): void
  onUnsetAdd(): void
}

export const AddUserItem = (props: TProps) => {
  const { actionConfig, onSetAdd, onUnsetAdd } = props
  const [onSaveNewUser, updateConfig] = useMutation(USER_CREATE_MUTATION);
  const isAddOpen = actionConfig.action === EAction.Add
  const handleSubmitClick = (values) => onSaveNewUser({ variables: { username: values.username, email: values.email } })

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
                inputs={[
                  'username',
                  'email'
                ]}
                onSubmitClick={handleSubmitClick}
              />
            </Paper>
          </Info>
        )}
      </AnimatePresence>
      <UserItemControls {...props}>
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
      </UserItemControls>
    </Wrapper>
  )
}
// () => onSaveNewUser({ variables: { username: 'x', email: 'x@gmail.com' } })