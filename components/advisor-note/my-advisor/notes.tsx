import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { TClientProfile } from "../../../models"
import { ADVISOR_NOTE_BY_CLIENT_QUERY } from "../../../utils"
import { LoadingCentered } from "../../../common"
import { NotesText } from "../notes-text"

type TProps = {
  userProfile: TClientProfile
}

export const Notes = (props: TProps) => {
  const { data, loading, error } = useQuery(ADVISOR_NOTE_BY_CLIENT_QUERY, {
    variables: {
      client: props.userProfile.username.toLowerCase(),
    },
  })
  if (loading) {
    return (
      <LoadingCentered />
    )
  } else {
    return (
      <NotesText>
        {data.advisorNoteBy.advisorNotes}
      </NotesText>
    )
  }
}
