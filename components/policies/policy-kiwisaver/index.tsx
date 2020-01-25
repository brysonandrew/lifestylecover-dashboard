import * as React from "react"
import styled from "styled-components"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { PageWrapper, LoadingCentered } from "../../../common"
import { POLICY_GET_KIWISAVER_LIST_QUERY, POLICY_CREATE_KIWISAVER_MUTATION, POLICY_DELETE_KIWISAVER_MUTATION, POLICY_UPDATE_KIWISAVER_MUTATION } from "../../../utils"
import { TUserProfile } from "../../../models"
import { PolicyKiwisaverInputs } from "./policy-kiwisaver-inputs"
import { PolicyController } from "../policy-controller"

type TProps = {
  userProfile: TUserProfile
}

export const PolicyKiwisaver = (props: TProps) => {
  const { userProfile } = props
  const { loading, error, data } = useQuery(POLICY_GET_KIWISAVER_LIST_QUERY, {});
  const updateMutation = useMutation(POLICY_UPDATE_KIWISAVER_MUTATION)
  const createMutation = useMutation(POLICY_CREATE_KIWISAVER_MUTATION)
  const deleteMutation = useMutation(POLICY_DELETE_KIWISAVER_MUTATION)

  return (
    <PageWrapper title="Policy Kiwisaver">
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
            edges={data.policiesKiwisaver.edges}
          >
            <PolicyKiwisaverInputs />
          </PolicyController>
        )}
    </PageWrapper>
  )
}