import * as React from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/react-hooks"
import { USER_GET_LIST_QUERY } from "../../utils/graphql/user-get-list.query"
import { LoadingCentered } from "../../common/loading"
import { ProfileEditable } from "./profile-editable"
import { TUserProfile } from "../../models/users"
import { IActionConfig, EAction } from "../../models"
import { Item } from "../actions/item"
import { EMPTY_CONFIG } from "../actions"

const Wrapper = styled.div`
  
`

type TProps = {
  userProfile: TUserProfile
}

export const Profile = (props: TProps) => {
  const { userProfile } = props
  const [actionConfig, onSetActionConfig] = React.useState<IActionConfig>({ action: null, info: null })
  const { action, info } = actionConfig
  console.log(actionConfig)
  const loading = false
  const isEditing = action === EAction.Edit
  return (
    <Wrapper>
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
            {isEditing
              ? (
                <ProfileEditable
                  userProfile={userProfile}
                />
              )
              : (
                <div>
                  display profile
                </div>
              )}
          </Item>
        )}
    </Wrapper>
  )
}
