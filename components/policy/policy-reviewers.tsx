import * as React from "react"
import { Select } from "../../common"
import { useQuery } from "@apollo/react-hooks"
import { REVIEWER_LIST_ALL_QUERY } from "../../utils/graphql/reviewer"

type TProps = {}

export const PolicyReviewers = (props: TProps) => {
  const { loading, error, data } = useQuery(REVIEWER_LIST_ALL_QUERY)
  console.log(loading)
  console.log(data)

  return (
    <Select
      menuItems={[
        '1','2','3'
      ]}
    />
  )
}
