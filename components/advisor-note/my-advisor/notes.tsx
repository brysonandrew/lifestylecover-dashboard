import * as React from "react"
import { TClientProfile } from "../../../models"
import { useQuery } from "@apollo/react-hooks"
import { ADVISOR_NOTE_BY_CLIENT_QUERY } from "../../../utils"

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

