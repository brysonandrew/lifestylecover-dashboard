import * as React from "react"
import styled from "styled-components"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { PageWrapper, LoadingCentered } from "../../../common"
import {
  POLICY_GET_PET_LIST_QUERY,
  POLICY_CREATE_PET_MUTATION,
  POLICY_DELETE_PET_MUTATION,
  POLICY_UPDATE_PET_MUTATION,
} from "../../../utils"
import { TUserProfile } from "../../../models"
import { PolicyPetInputs } from "./policy-pet-inputs"
import { PolicyController } from "../policy-controller"
import { Pets } from "@material-ui/icons"
import { POLICY_PET_INIT } from "../../../data-initial-values"

type TProps = {
  userProfile: TUserProfile
}

export const PolicyPet = (props: TProps) => {
  const { userProfile } = props
  const { loading, error, data } = useQuery(POLICY_GET_PET_LIST_QUERY, {})
  const updateMutation = useMutation(POLICY_UPDATE_PET_MUTATION)
  const createMutation = useMutation(POLICY_CREATE_PET_MUTATION)
  const deleteMutation = useMutation(POLICY_DELETE_PET_MUTATION)

  return (
    <PageWrapper title="Pet" icon={<Pets />}>
      {loading ? (
        <LoadingCentered />
      ) : (
        <PolicyController
          inputs={POLICY_PET_INIT}
          userProfile={userProfile}
          updateMutation={updateMutation}
          createMutation={createMutation}
          deleteMutation={deleteMutation}
          edges={data.policiesPet.edges}
        >
          <PolicyPetInputs />
        </PolicyController>
      )}
    </PageWrapper>
  )
}
