import * as React from "react"
import { TUserProfile, IActionConfig, EAction } from "../../../models"
import { PageWrapper, LoadingCentered } from "../../../common"
import { Item, EMPTY_CONFIG } from "../.."
import { ProfileDetailsUpdateForm } from "./profile-details-update-form"

type TProps = {
  userProfile: TUserProfile
}

export const DetailsEditable = (props: TProps) => {
  const { userProfile } = props
  const [actionConfig, onSetActionConfig] = React.useState<IActionConfig>({ action: null, info: null })
  const { action, info } = actionConfig
  const loading = false
  const isEditing = action === EAction.Edit
  return (
    <PageWrapper title="Details">
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
                <ProfileDetailsUpdateForm
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
