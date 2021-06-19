import * as React from "react"
import { TUserProfile } from "../../../models"
import { useMutation, useQuery } from "@apollo/react-hooks"
import {
  POLICY_GET_VIEWER_RISK_QUERY,
  POLICY_CREATE_RISK_MUTATION,
  POLICY_DELETE_RISK_MUTATION,
  POLICY_UPDATE_RISK_MUTATION,
  POLICY_UPDATE_REVIEW_RISK_MUTATION,
} from "../../../utils"
import { PolicyRisk } from "../policy-risk"

type TProps = {
  userProfile: TUserProfile
}

export const PolicyClientRisk = (props: TProps) => {
  const updateMutation = useMutation(POLICY_UPDATE_REVIEW_RISK_MUTATION)
  const createMutation = useMutation(POLICY_CREATE_RISK_MUTATION)
  const deleteMutation = useMutation(POLICY_DELETE_RISK_MUTATION)
  const { loading, error, data, refetch } = useQuery(
    POLICY_GET_VIEWER_RISK_QUERY,
    {}
  )
  return (
    <div>
      <PolicyRisk
        isLoading={loading}
        error={error}
        refetch={refetch}
        edges={data?.viewer.policiesRisk.edges}
        updateMutation={updateMutation}
        createMutation={createMutation}
        deleteMutation={deleteMutation}
        {...props}
      />
    </div>
  )
}
