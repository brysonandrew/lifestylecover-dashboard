import * as React from "react"
import { TUserProfile, IActionConfig, EAction } from "../../../models"
import { PageWrapper, LoadingCentered } from "../../../common"
import { Item, EMPTY_ACTION_CONFIG } from "../.."
import { ProfileDetailsUpdateForm } from "./profile-details-update-form"
import { FormText } from "../../../common/text-ui/form-text"
import { USER_DETAILS_FORM } from "../../../data-initial-values-user"
import {
  initializeFormValues,
  VIEWER_CLIENT_DETAILS_QUERY,
} from "../../../utils"
import { useQuery } from "@apollo/react-hooks"
import { PaperError } from "../../../common/paper-error"

type TProps = {
  userProfile: TUserProfile
}

export const DetailsEditable = (props: TProps) => {
  const { userProfile } = props
  const [actionConfig, onSetActionConfig] = React.useState<IActionConfig>(
    EMPTY_ACTION_CONFIG
  )
  const { loading, data, error, refetch } = useQuery(
    VIEWER_CLIENT_DETAILS_QUERY,
    {}
  )
  const { action, actionInfo } = actionConfig
  const isEditing = action === EAction.Edit
  return (
    <PageWrapper title="Details">
      {loading ? (
        <LoadingCentered />
      ) : error ? (
        <PaperError>An error occurred</PaperError>
      ) : (
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
                    : { action: EAction.Edit, actionInfo: data.viewer }
                ),
            }}
          >
            {isEditing ? (
              <ProfileDetailsUpdateForm
                userClientDetails={data.viewer}
                refetch={refetch}
              />
            ) : (
              <FormText>
                {initializeFormValues(data.viewer, USER_DETAILS_FORM)}
              </FormText>
            )}
          </Item>
        </ul>
      )}
    </PageWrapper>
  )
}

export * from "./profile-details-inputs"
export * from "./profile-details-update-form"
