import React from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/react-hooks"
import { TClientProfile } from "../../../models"
import { LoadingCentered, PageWrapper, FormText } from "../../../common"
import {
  USER_GET_ADVISOR_BY_USER_ID_QUERY,
  userName,
  profilePicture,
  defined,
} from "../../../utils"
import { ProfilePicture } from "../../../layout"
import { Notes } from "./notes"
import { NotesSectionTitle } from "../notes-section-title"
import { PaperError } from "../../../common/paper-error"

const Wrapper = styled.div`
  padding: 12px 0;
`

const AdvisorProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const AdvisorInfo = styled.div`
  margin-left: 12px;
  padding-left: 24px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
`

type TProps = {
  userProfile: TClientProfile
}

export const MyAdvisor = (props: TProps) => {
  const { userProfile } = props
  const { data, loading, error } = useQuery(USER_GET_ADVISOR_BY_USER_ID_QUERY, {
    variables: {
      userIds: [userProfile.advisor],
    },
    skip: !defined(userProfile.advisor)
  })
  if (loading) {
    return <LoadingCentered />
  } else {
    if (error) {
      return <PaperError>An error occured.</PaperError>
    } else {
      const advisor = data.users.edges[0].node
      return (
        <PageWrapper title="My Advisor">
          <Wrapper>
            <NotesSectionTitle title={userName(advisor)}>
              <AdvisorProfile>
                <ProfilePicture boxShadow={1} src={profilePicture(advisor)} />
                {advisor && (
                  <AdvisorInfo>
                    <FormText>
                      {{
                        ...(advisor.email ? { Email: advisor.email } : {}),
                        ...(advisor.phone ? { Phone: advisor.phone } : {}),
                        ...(advisor.address ? { Address: advisor.address } : {}),
                      }}
                    </FormText>
                  </AdvisorInfo>
                )}
              </AdvisorProfile>
            </NotesSectionTitle>
            <Notes userProfile={userProfile} />
          </Wrapper>
        </PageWrapper>
      )
    }
  }
}
