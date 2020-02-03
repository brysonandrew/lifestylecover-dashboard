import * as React from "react"
import styled from "styled-components"
import { ItemInfoWrapper } from "./item-info-wrapper"
import { EAction, IActionConfig, EUserRole } from "../../../models"
import { ItemControls } from "./item-controls"
import { Edit, Delete, Close } from "@material-ui/icons"

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 12px 0;
  &:first-child {
    margin-top: 0;
  }
`

type TEditConfig = {
  isEditing: boolean
  onSet(): void
}

type TProps = {
  id: string
  userRole?: EUserRole
  actionConfig: IActionConfig
  isReviewMeta?: boolean
  editConfig?: TEditConfig
  onSetDelete?(): void
  children: JSX.Element
}

export const Item = (props: TProps) => {
  const { isReviewMeta, children, editConfig, userRole, onSetDelete } = props
  return (
    <Wrapper>
      {(editConfig || onSetDelete) && (
        <ItemControls isReviewMeta={isReviewMeta} userRole={userRole}>
          {[
            ...(editConfig
              ? [
                  {
                    action: EAction.Edit,
                    callback: editConfig.onSet,
                    icon: editConfig.isEditing ? (
                      <Close />
                    ) : (
                      <Edit color="primary" />
                    ),
                  },
                ]
              : []),
            ...(onSetDelete
              ? [
                  {
                    action: EAction.Delete,
                    callback: onSetDelete,
                    icon: <Delete color="error" />,
                  },
                ]
              : []),
          ]}
        </ItemControls>
      )}
      <ItemInfoWrapper>{children}</ItemInfoWrapper>
    </Wrapper>
  )
}
