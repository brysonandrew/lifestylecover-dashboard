import * as React from "react"
import { TUserProfile } from "../../../models"
import { useMutation, useQuery } from "@apollo/react-hooks"
import {
  POLICY_GET_VIEWER_KIWISAVER_QUERY,
  POLICY_CREATE_KIWISAVER_MUTATION,
  POLICY_DELETE_KIWISAVER_MUTATION,
  POLICY_UPDATE_KIWISAVER_MUTATION,
  POLICY_UPDATE_REVIEW_KIWISAVER_MUTATION,
} from "../../../utils"
import { PolicyKiwisaver } from "../policy-kiwisaver"

type TProps = {
  userProfile: TUserProfile
}

export const PolicyClientKiwisaver = (props: TProps) => {
  const updateMutation = useMutation(POLICY_UPDATE_REVIEW_KIWISAVER_MUTATION)
  const createMutation = useMutation(POLICY_CREATE_KIWISAVER_MUTATION)
  const deleteMutation = useMutation(POLICY_DELETE_KIWISAVER_MUTATION)
  const { loading, error, data, refetch } = useQuery(POLICY_GET_VIEWER_KIWISAVER_QUERY, {})
  return (
    <div>
      <PolicyKiwisaver
        isLoading={loading}
        refetch={refetch}
        edges={data?.viewer.policiesKiwisaver.edges}
        updateMutation={updateMutation}
        createMutation={createMutation}
        deleteMutation={deleteMutation}
        {...props}
      />
    </div>
  )
}
