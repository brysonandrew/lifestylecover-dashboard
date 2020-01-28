import React from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { USER_GET_LIST_QUERY, USER_CREATE_MUTATION, USER_DELETE_MUTATION } from "../../utils"
import { LoadingCentered, PageWrapper } from "../../common"
import { UserController } from "./user-controller"
import { TUserProfile } from "../../models"
import { USER_CONTACT_FORM } from "../../data-initial-values-policy"

type TProps = {
  userProfile: TUserProfile
}

export const Users = (props: TProps) => {
  const { userProfile } = props
  const { loading, error, data } = useQuery(USER_GET_LIST_QUERY, {});
  const createMutation = useMutation(USER_CREATE_MUTATION)
  const deleteMutation = useMutation(USER_DELETE_MUTATION)

  return (
    <PageWrapper title="Users">
      {loading
        ? (
          <LoadingCentered />
        )
        : (
          <UserController
            inputs={USER_CONTACT_FORM}
            userProfile={userProfile}
            updateMutation={null}
            createMutation={createMutation}
            deleteMutation={deleteMutation}
            edges={data.users.edges}
          />
        )}
    </PageWrapper>
  )
}
 