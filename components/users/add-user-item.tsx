import * as React from "react"
import styled from "styled-components"
import { color, layoutSizes } from "../../data"
import { UserItemControls } from "./user-item-controls"
import { UserItemInfoWrapper } from "./user-item-info-wrapper"
import { EUserAction, IUserActionConfig } from "../../models/users"
import { Add, Save, Cancel } from "@material-ui/icons"
import { useMutation } from "@apollo/react-hooks"
import { USER_CREATE_MUTATION } from "../../utils/graphql/user-create.mutation"
import { Formik, Form } from "formik"
import { addUserValidationSchema } from "../../data-validation"
import { TextFieldSmall } from "../../common/inputs/text-field-small"
import { placeholder } from "../../data-placeholders"
import { motion } from "framer-motion"
import { SubmitButton } from "../../common/buttons/submit-button"
import { Button, CircularProgress } from "@material-ui/core"
import { ErrorDisplay } from "./error-display"

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
  background-color: ${color.lightGrey};
`

const FormInner = styled(motion.div)`
  padding-bottom: 8px;
`

type TProps = {
  actionConfig: IUserActionConfig
  onSetAdd(): void
  onUnsetAdd(): void
}

export const AddUserItem = (props: TProps) => {
  const { actionConfig, onSetAdd, onUnsetAdd } = props
  const [onSaveNewUser, { data, loading, error }] = useMutation(USER_CREATE_MUTATION);
  const isAddOpen = actionConfig.action === EUserAction.Add

  return (
    <Wrapper>
      <Info
        initial={false}
        animate={isAddOpen ? 'open' : 'close'}
        variants={{
          open: {
            display: 'flex',
            opacity: 1
          },
          close: {
            display: 'none',
            opacity: 0
          }
        }}
      >
        <Formik
          validateOnChange={true}
          initialValues={INIT}
          validationSchema={addUserValidationSchema}
          onSubmit={null}
        >
          {({values}) => (
            <Form>
              <FormInner>
                {[
                  'username',
                  'email'
                ].map((inputKey) => (
                  <TextFieldSmall
                    key={inputKey}
                    label={inputKey}
                    placeholder={placeholder.user[inputKey]}
                    name={inputKey}
                  />
                ))}
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  type="submit"
                  disabled={loading}
                  onClick={() => onSaveNewUser({variables: {username: values.username, email: values.email}})}
                  startIcon={loading ? <CircularProgress size={18} color="inherit" /> : <Save />}
                >
                  Save
              </Button>
              <ErrorDisplay>
                {error}
              </ErrorDisplay>
              </FormInner>
            </Form>
          )}
        </Formik>
      </Info>
      <UserItemControls {...props}>
        {[
          isAddOpen
            ? {
              action: EUserAction.Save,
              callback: onUnsetAdd,
              icon: <Cancel />,
            }
            : {
              action: EUserAction.Add,
              callback: onSetAdd,
              icon: <Add />,
            }
        ]}
      </UserItemControls>
    </Wrapper>
  )
}
// () => onSaveNewUser({ variables: { username: 'x', email: 'x@gmail.com' } })