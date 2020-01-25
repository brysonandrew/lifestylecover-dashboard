import * as React from "react"
import styled from "styled-components"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { PageWrapper, LoadingCentered } from "../../../common"
import { POLICY_GET_ASSET_LIST_QUERY, POLICY_CREATE_ASSET_MUTATION, POLICY_DELETE_ASSET_MUTATION, POLICY_UPDATE_ASSET_MUTATION } from "../../../utils"
import { TUserProfile } from "../../../models"
import { PolicyAssetInputs } from "./policy-asset-inputs"
import { PolicyController } from "../policy-controller"

type TProps = {
  userProfile: TUserProfile
}

export const PolicyAsset = (props: TProps) => {
  const { userProfile } = props
  const { loading, error, data } = useQuery(POLICY_GET_ASSET_LIST_QUERY, {});
  const updateMutation = useMutation(POLICY_UPDATE_ASSET_MUTATION)
  const createMutation = useMutation(POLICY_CREATE_ASSET_MUTATION)
  const deleteMutation = useMutation(POLICY_DELETE_ASSET_MUTATION)
  
  return (
    <PageWrapper title="Policy Asset">
      {loading
        ? (
          <LoadingCentered />
        )
        : (
          <PolicyController
            inputs={{
              title: ""
            }}
            userProfile={userProfile}
            updateMutation={updateMutation}
            createMutation={createMutation}
            deleteMutation={deleteMutation}
            edges={data.policiesAsset.edges}
          >
            <PolicyAssetInputs />
          </PolicyController>
        )}
    </PageWrapper>
  )
}
