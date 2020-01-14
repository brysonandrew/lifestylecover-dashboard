import * as React from "react"
import styled from "styled-components"
import { color, layoutSizes } from "../../data"
import { UserItemControls } from "./user-item-controls"
import { UserItemInfoWrapper } from "./user-item-info-wrapper"
import { EUserAction, IUserActionConfig } from "../../models/users"
import { Add, Save } from "@material-ui/icons"
import { useMutation } from "@apollo/react-hooks"
import { USER_CREATE_MUTATION } from "../../utils/graphql/user-create.mutation"
import { Formik, Form } from "formik"
import { addUserValidationSchema } from "../../data-validation"
import { TextFieldSmall } from "../../common/inputs/text-field-small"
import { UPDATE_USER_PLACEHOLDER_LOOKUP } from "../../data-placeholders"

const INIT = {
  name: 'x'
}

const Wrapper = styled.li`
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: ${color.lightGrey};
`

type TProps = {
  actionConfig: IUserActionConfig
  onSetAdd(): void
}

export const AddUserItem = (props: TProps) => {
  const { actionConfig, onSetAdd } = props
  const [onSaveNewUser, { data }] = useMutation(USER_CREATE_MUTATION);
  console.log(data)

  const isAddOpen = actionConfig.action === EUserAction.Add

  return (
    <Wrapper>
      <UserItemInfoWrapper>
        <div>hi</div>
      </UserItemInfoWrapper>
      <UserItemControls {...props}>
        {[
          isAddOpen
            ? {
              action: EUserAction.Save,
              callback: () => onSaveNewUser({ variables: { username: 'x', email: 'x@gmail.com' } }),
              icon: <Save />,
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
