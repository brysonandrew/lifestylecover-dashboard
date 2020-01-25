import * as React from "react"
import { TUserProfile, IActionConfig, EAction } from "../../../models"
import { PageWrapper, LoadingCentered } from "../../../common"
import { Item, EMPTY_ACTION_CONFIG } from "../.."
import { ProfileContactUpdateForm } from "./profile-contact-update-form"
import { FormDisabled } from "../../../common"
import { USER_CONTACT_FORM } from "../../../data-initial-values"
import { initializeFormValues } from "../../../utils"

type TProps = {
  userProfile: TUserProfile
}

export const ContactEditable = (props: TProps) => {
  const { userProfile } = props
  const [actionConfig, onSetActionConfig] = React.useState<IActionConfig>(EMPTY_ACTION_CONFIG)
  const { action } = actionConfig
  const isEditing = action === EAction.Edit
  console.log(userProfile)
  return (
    <PageWrapper title="Contact info">
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
                  : { action: EAction.Edit, actionInfo: userProfile }
              )
            ),
          }}
        >
          {isEditing
            ? (
              <ProfileContactUpdateForm
                userProfile={userProfile}
              />
            )
            : (
              <FormDisabled>
                {initializeFormValues(USER_CONTACT_FORM, userProfile)}
              </FormDisabled>
            )}
        </Item>
      </ul>
    </PageWrapper>
  )
}

export * from './profile-contact-inputs'
export * from './profile-contact-update-form'
