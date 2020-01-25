import * as React from "react"
import styled from "styled-components"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { PageWrapper, LoadingCentered } from "../../../common"
import { POLICY_GET_RISK_LIST_QUERY, POLICY_UPDATE_RISK_MUTATION, POLICY_CREATE_RISK_MUTATION, POLICY_DELETE_RISK_MUTATION } from "../../../utils"
import { TUserProfile } from "../../../models"
import { PolicyRiskInputs } from "./policy-risk-inputs"
import { PolicyController } from "../policy-controller"
import { POLICY_RISK } from "../../../data-initial-values"

type TProps = {
  userProfile: TUserProfile
}

export const PolicyRisk = (props: TProps) => {
  const { userProfile } = props
  const { loading, error, data } = useQuery(POLICY_GET_RISK_LIST_QUERY, {});
  const updateMutation = useMutation(POLICY_UPDATE_RISK_MUTATION)
  const createMutation = useMutation(POLICY_CREATE_RISK_MUTATION)
  const deleteMutation = useMutation(POLICY_DELETE_RISK_MUTATION)

  return (
    <PageWrapper title="Policy Risk">
      {loading
        ? (
          <LoadingCentered />
        )
        : (
          <PolicyController
            inputs={POLICY_RISK}
            userProfile={userProfile}
            updateMutation={updateMutation}
            createMutation={createMutation}
            deleteMutation={deleteMutation}
            edges={data.policiesRisk.edges}
          >
            <PolicyRiskInputs />
          </PolicyController>
        )}
    </PageWrapper>
  )
}
