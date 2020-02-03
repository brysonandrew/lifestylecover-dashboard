import * as React from "react"
import { TUserProfile, IActionConfig, EAction } from "../../../models"
import { PageWrapper } from "../../../common"
import { Item, EMPTY_ACTION_CONFIG } from "../.."
import { ProfileDetailsUpdateForm } from "./profile-details-update-form"
import { FormText } from "../../../common/text-ui/form-text"
import { USER_DETAILS_FORM } from "../../../data-initial-values-user"
import { initializeFormValues } from "../../../utils"

type TProps = {
  userProfile: TUserProfile
}

export const DetailsEditable = (props: TProps) => {
  const { userProfile } = props
  const [actionConfig, onSetActionConfig] = React.useState<IActionConfig>(
    EMPTY_ACTION_CONFIG
  )
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
            onSet: () =>
              onSetActionConfig(
                isEditing
                  ? EMPTY_ACTION_CONFIG
                  : { action: EAction.Edit, actionInfo: userProfile }
              ),
          }}
        >
          {isEditing ? (
            <ProfileDetailsUpdateForm
              userProfile={userProfile}
            />
          ) : (
            <FormText>
              {initializeFormValues(userProfile, USER_DETAILS_FORM)}
            </FormText>
          )}
        </Item>
      </ul>
    </PageWrapper>
  )
}

export * from "./profile-details-inputs"
export * from "./profile-details-update-form"
