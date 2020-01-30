import * as React from "react"
import { TUserProfile } from "../../../models"
import { useMutation, useQuery } from "@apollo/react-hooks"
import {
  POLICY_GET_PET_LIST_QUERY,
  POLICY_CREATE_PET_MUTATION,
  POLICY_DELETE_PET_MUTATION,
  POLICY_UPDATE_PET_MUTATION,
} from "../../../utils"
import { PolicyPet } from "../policy-pet"

type TProps = {
  userProfile: TUserProfile
}

export const PolicyAllPet = (props: TProps) => {
  const updateMutation = useMutation(POLICY_UPDATE_PET_MUTATION)
  const createMutation = useMutation(POLICY_CREATE_PET_MUTATION)
  const deleteMutation = useMutation(POLICY_DELETE_PET_MUTATION)
  const { loading, error, data, refetch } = useQuery(POLICY_GET_PET_LIST_QUERY, {})

  return (
    <PolicyPet
      isLoading={loading}
      refetch={refetch}
      edges={data?.policiesPet?.edges}
      updateMutation={updateMutation}
      createMutation={createMutation}
      deleteMutation={deleteMutation}
      {...props}
    />
  )
}