import * as React from "react"
import { TAdvisorProfile } from "../../../models"
import { PageWrapper, LoadingCentered } from "../../../common"
import { useQuery } from "@apollo/react-hooks"
import { ADVISOR_NOTE_LIST_BY_ADVISOR_QUERY } from "../../../utils"
import { AdvisorNoteList } from "./advisor-note-list"

type TProps = {
  userProfile: TAdvisorProfile
}

export const NotesToClients = (props: TProps) => {
  const { userProfile } = props
  const { loading, error, data, refetch } = useQuery(
    ADVISOR_NOTE_LIST_BY_ADVISOR_QUERY,
    {
      variables: { id: userProfile.userId },
    }
  )

  return (
    <PageWrapper title="Notes to Clients">
      {loading
        ? (
          <LoadingCentered/>
        )
        : (
          <AdvisorNoteList userProfile={userProfile} edges={data.advisorNotes.edges} refetch={refetch}/>
        )}
    </PageWrapper>
  )
}
