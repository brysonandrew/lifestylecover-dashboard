import * as React from "react"
import { TUserProfile, IActionConfig, EAction } from "../../../models"
import { PageWrapper, LoadingCentered } from "../../../common"
import { Item, EMPTY_CONFIG } from "../.."
import { ProfileContactUpdateForm } from "./profile-contact-update-form"

type TProps = {
  userProfile: TUserProfile
}

export const ContactEditable = (props: TProps) => {
  const { userProfile } = props
  const [actionConfig, onSetActionConfig] = React.useState<IActionConfig>({ action: null, info: null })
  const { action, info } = actionConfig
  const loading = false
  const isEditing = action === EAction.Edit
  return (
    <PageWrapper title="Contact info">
      <ul>
        {loading
          ? (
            <LoadingCentered />
          )
          : (
            <>
              <Item
                id="Contact"
                actionConfig={actionConfig}
                editConfig={{
                  isEditing,
                  onSet: () => onSetActionConfig(isEditing ? EMPTY_CONFIG : { action: EAction.Edit, info: userProfile }),
                }}
              >
                <ProfileContactUpdateForm
                  isEditing={isEditing}
                  userProfile={userProfile}
                />
              </Item>
            </>
          )}
      </ul>
    </PageWrapper>
  )
}
