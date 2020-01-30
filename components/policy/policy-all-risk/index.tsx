import * as React from "react"
import { TUserProfile } from "../../../models"
import { PolicyRisk } from "../policy-risk"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { POLICY_UPDATE_RISK_MUTATION, POLICY_CREATE_RISK_MUTATION, POLICY_DELETE_RISK_MUTATION, POLICY_GET_RISK_LIST_QUERY } from "../../../utils"

type TProps = {
  userProfile: TUserProfile
}

export const PolicyAllRisk = (props: TProps) => {
  const updateMutation = useMutation(POLICY_UPDATE_RISK_MUTATION)
  const createMutation = useMutation(POLICY_CREATE_RISK_MUTATION)
  const deleteMutation = useMutation(POLICY_DELETE_RISK_MUTATION)
  const { loading, error, data, refetch } = useQuery(POLICY_GET_RISK_LIST_QUERY, {})

  return (
    <PolicyRisk
      isLoading={loading}
      refetch={refetch}
      edges={data?.policiesRisk?.edges}
      updateMutation={updateMutation}
      createMutation={createMutation}
      deleteMutation={deleteMutation}
      {...props}
    />
  )
}