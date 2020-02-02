import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { TClientProfile } from "../../../models"
import { LoadingCentered, PageWrapper, FormText } from "../../../common"
import {
  USER_GET_ADVISOR_BY_USER_ID_QUERY,
  titleText,
  profilePicture,
} from "../../../utils"
import { Avatar } from "../../../layout"
import { Notes } from "./notes"

type TProps = {
  userProfile: TClientProfile
}

export const MyAdvisor = (props: TProps) => {
  const { userProfile } = props
  const { data, loading, error } = useQuery(USER_GET_ADVISOR_BY_USER_ID_QUERY, {
    variables: {
      userIds: [3],
    },
  })
  if (loading) {
    return <LoadingCentered />
  } else {
    const advisor = data.users.edges[0].node
    return (
      <PageWrapper title={`Hi I'm ${titleText(userProfile)}`}>
        <Avatar src={profilePicture(advisor)} />
        <div>If something is on your mind we would love to hear from you!</div>
        <div>You can contact us directly -</div>
        {data && (
          <FormText>
            {{
              Email: advisor.email,
              Phone: advisor.phone,
              Address: advisor.address,
            }}
          </FormText>
        )}
        <Notes userProfile={userProfile} />
      </PageWrapper>
    )
  }
}
