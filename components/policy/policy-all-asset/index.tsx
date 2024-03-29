import * as React from "react"
import { TUserProfile } from "../../../models"
import { useMutation, useQuery } from "@apollo/react-hooks"
import {
  POLICY_GET_ASSET_LIST_QUERY,
  POLICY_CREATE_ASSET_MUTATION,
  POLICY_DELETE_ASSET_MUTATION,
  POLICY_UPDATE_ASSET_MUTATION,
} from "../../../utils"
import { PolicyAsset } from "../policy-asset"

type TProps = {
  userProfile: TUserProfile
}

export const PolicyAllAsset = (props: TProps) => {
  const updateMutation = useMutation(POLICY_UPDATE_ASSET_MUTATION)
  const createMutation = useMutation(POLICY_CREATE_ASSET_MUTATION)
  const deleteMutation = useMutation(POLICY_DELETE_ASSET_MUTATION)
  const { loading, error, data, refetch } = useQuery(
    POLICY_GET_ASSET_LIST_QUERY,
    {}
  )

  return (
    <div>
      <PolicyAsset
        isLoading={loading}
        error={error}
        refetch={refetch}
        edges={data?.policiesAsset?.edges}
        updateMutation={updateMutation}
        createMutation={createMutation}
        deleteMutation={deleteMutation}
        {...props}
      />
    </div>
  )
}
