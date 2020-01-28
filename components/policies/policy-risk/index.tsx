import * as React from "react"
import styled from "styled-components"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { Timeline } from "@material-ui/icons"
import { PageWrapper, LoadingCentered } from "../../../common"
import {
  POLICY_GET_RISK_LIST_QUERY,
  POLICY_UPDATE_RISK_MUTATION,
  POLICY_CREATE_RISK_MUTATION,
  POLICY_DELETE_RISK_MUTATION,
} from "../../../utils"
import { TUserProfile } from "../../../models"
import { PolicyRiskInputs } from "./policy-risk-inputs"
import { PolicyController } from "../policy-controller"
import {
  POLICY_RISK_INIT,
  BENEFIT_RISK_INIT,
} from "../../../data-initial-values-policy"

type TProps = {
  userProfile: TUserProfile
}

export const PolicyRisk = (props: TProps) => {
  const { userProfile } = props
  const { loading, error, data, refetch } = useQuery(POLICY_GET_RISK_LIST_QUERY, {})
  const updateMutation = useMutation(POLICY_UPDATE_RISK_MUTATION)
  const createMutation = useMutation(POLICY_CREATE_RISK_MUTATION)
  const deleteMutation = useMutation(POLICY_DELETE_RISK_MUTATION)

  return (
    <PageWrapper title="Risk" icon={<Timeline />}>
      {loading ? (
        <LoadingCentered />
      ) : (
        <PolicyController
          refetch={refetch}
          inputs={POLICY_RISK_INIT}
          arrayInputs={BENEFIT_RISK_INIT}
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
