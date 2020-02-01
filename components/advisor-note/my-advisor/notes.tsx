import * as React from "react"
import { TClientProfile } from "../../../models"
import { LoadingCentered, PageWrapper, FormText } from "../../../common"
import { USER_GET_ADVISOR_BY_USER_ID_QUERY, titleText } from "../../../utils"
import { useQuery } from "@apollo/react-hooks"
import { Avatar } from "../../../layout/content/header/avatar"
import { TextField } from "@material-ui/core"
import { ADVISOR_NOTE_BY_CLIENT_QUERY } from "../../../utils/graphql/advisor-note/advisor-note-by-client.query"

type TProps = {
  userProfile: TClientProfile
}

export const Notes = (props: TProps) => {
  const { data, loading, error } = useQuery(ADVISOR_NOTE_BY_CLIENT_QUERY, {
    variables: {
      client: props.userProfile.username.toLowerCase()
    }
  })
  console.log(data)
  return (
    <div>
      <div>
        Future priorities
      </div>
      <div>
        Recommendations
      </div>
      <div>
        Notes
      </div>        
    </div>
  )
}

