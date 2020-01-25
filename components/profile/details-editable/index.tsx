import * as React from "react"
import { TUserProfile, IActionConfig, EAction } from "../../../models"
import { PageWrapper } from "../../../common"
import { Item, EMPTY_ACTION_CONFIG } from "../.."
import { ProfileDetailsUpdateForm } from "./profile-details-update-form"
import { FormDisabled } from "../../../common/form-disabled"
import { USER_DETAILS_FORM } from "../../../data-initial-values"
import { initializeFormValues } from "../../../utils"

type TProps = {
  userProfile: TUserProfile
}

export const DetailsEditable = (props: TProps) => {
  const { userProfile } = props
  const [actionConfig, onSetActionConfig] = React.useState<IActionConfig>(EMPTY_ACTION_CONFIG)
  const { action, actionInfo } = actionConfig
  const isEditing = action === EAction.Edit
  return (
    <PageWrapper title="Details">
      <ul>
        <Item
          id="Contact"
          actionConfig={actionConfig}
          editConfig={{
            isEditing,
            onSet: () => (
              onSetActionConfig(
                isEditing
                  ? EMPTY_ACTION_CONFIG
                  : { action: EAction.Edit, actionInfo: userProfile })
            ),
          }}
        >
          {isEditing
            ? (
              <ProfileDetailsUpdateForm
                isEditing={isEditing}
                userProfile={userProfile}
              />
            )
            : (
              <FormDisabled>
                {initializeFormValues(USER_DETAILS_FORM, userProfile)}
              </FormDisabled>
            )}
        </Item>
      </ul>
    </PageWrapper>
  )
}

export * from './profile-details-inputs'
export * from './profile-details-update-form'
