import * as React from "react"
import { LoadingCentered } from "../../common/loading"
import { ProfileEditable } from "./profile-editable"
import { TUserProfile } from "../../models/users"
import { IActionConfig, EAction } from "../../models"
import { Item } from "../actions/item"
import { EMPTY_CONFIG } from "../actions"
import { PageWrapper } from "../../common/page-wrapper"

type TProps = {
  userProfile: TUserProfile
}

export const Profile = (props: TProps) => {
  const { userProfile } = props
  const [actionConfig, onSetActionConfig] = React.useState<IActionConfig>({ action: null, info: null })
  const { action, info } = actionConfig
  const loading = false
  const isEditing = action === EAction.Edit
  return (
    <PageWrapper title="Your contact info">
      <ul>
        {loading
          ? (
            <LoadingCentered />
          )
          : (
            <Item
              id="Profile"
              actionConfig={actionConfig}
              editConfig={{
                isEditing,
                onSet: () => onSetActionConfig(isEditing ? EMPTY_CONFIG : { action: EAction.Edit, info: userProfile }),
              }}
            >
              <ProfileEditable
                isEditing={isEditing}
                userProfile={userProfile}
              />
            </Item>
          )}
      </ul>
    </PageWrapper>
  )
}
