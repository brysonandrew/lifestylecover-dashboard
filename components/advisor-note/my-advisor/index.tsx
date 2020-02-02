import React from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/react-hooks"
import { TClientProfile } from "../../../models"
import { LoadingCentered, PageWrapper, FormText } from "../../../common"
import {
  USER_GET_ADVISOR_BY_USER_ID_QUERY,
  userName,
  profilePicture,
} from "../../../utils"
import { Avatar } from "../../../layout"
import { Notes } from "./notes"

const Wrapper = styled.div`
  padding: 12px 0;
`

const AdvisorProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`

const AdvisorInfo = styled.div`
  padding-left: 36px;
`

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
      <PageWrapper title={userName(advisor)}>
        <Wrapper>
          <AdvisorProfile>
            <Avatar boxShadow={1} src={profilePicture(advisor)} />
            {data && (
              <AdvisorInfo>
                <FormText>
                  {{
                    Email: advisor.email,
                    Phone: advisor.phone,
                    Address: advisor.address,
                  }}
                </FormText>
              </AdvisorInfo>
            )}
          </AdvisorProfile>
          <Notes userProfile={userProfile} />
        </Wrapper>
      </PageWrapper>
    )
  }
}
