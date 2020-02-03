import * as React from "react"
import { TUserProfile, IActionConfig, EAction } from "../../../models"
import { initializeFormValues, VIEWER_CONTACT_QUERY } from "../../../utils"
import { PageWrapper, FormText, LoadingCentered } from "../../../common"
import { Item, EMPTY_ACTION_CONFIG } from "../.."
import { ProfileContactUpdateForm } from "./profile-contact-update-form"
import { USER_CONTACT_FORM } from "../../../data-initial-values-user"
import { useQuery } from "@apollo/react-hooks"
import { PaperError } from "../../../common/paper-error"

type TProps = {
  userProfile: TUserProfile
}

export const ContactEditable = (props: TProps) => {
  const { userProfile } = props
  const [actionConfig, onSetActionConfig] = React.useState<IActionConfig>(
    EMPTY_ACTION_CONFIG
  )
  const { loading, data, error, refetch } = useQuery(VIEWER_CONTACT_QUERY, {})
  const { action } = actionConfig
  const isEditing = action === EAction.Edit
  return (
    <PageWrapper title="Contact info">
      {loading
        ? (
          <LoadingCentered />
        )
        : error
          ? (
            <PaperError>
              An error occurred.
            </PaperError>
          )
          : (
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
                    <ProfileContactUpdateForm userContact={data.viewer} refetch={refetch} />
                  ) : (
                      <FormText>
                        {initializeFormValues(data.viewer, USER_CONTACT_FORM)}
                      </FormText>
                    )}
                </Item>
              </ul>
            )
          }
    </PageWrapper>
  )
}

export * from "./profile-contact-inputs"
export * from "./profile-contact-update-form"
