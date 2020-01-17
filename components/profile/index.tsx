import * as React from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/react-hooks"
import { USER_GET_LIST_QUERY } from "../../utils/graphql/user-get-list.query"
import { LoadingCentered } from "../../common/loading"
import { ProfileEditable } from "./profile-editable"
import { TUserProfile } from "../../models/users"

const Wrapper = styled.div`
  
`

const List = styled.ul`
  
`

const Item = styled.li`
  
`

type TProps = {
  userProfile: TUserProfile
}

export const Profile = (props: TProps) => {
  const { userProfile } = props
  // const { loading, error, data } = useQuery(USER_GET_LIST_QUERY, {});
  // console.log(data)
  const loading = false
  return (
    <Wrapper>
      {loading
        ? (
          <LoadingCentered/>
        )
        : (
          <ProfileEditable
            userProfile={userProfile}
          />
        )}
    </Wrapper>
  )
}
