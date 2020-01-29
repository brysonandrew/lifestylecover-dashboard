import * as React from "react"
import { PageWrapper, LoadingCentered } from "../../common"
import { TPolicyProps } from "../../models/policy"
import { PolicyList } from "./policy-list"

type TProps = {
  title: string
  icon: JSX.Element
  inputs: any
  arrayInputs?: any
  edgesKey: string
  children: JSX.Element
} & TPolicyProps

export const PolicyController = (props: TProps) => {
  const { children, inputs, arrayInputs, edgesKey, title, icon, userProfile, fetchQuery, updateMutation, createMutation, deleteMutation } = props
  const { loading, error, data, refetch } = fetchQuery

  return (
    <PageWrapper title={title} icon={icon}>
      {loading ? (
        <LoadingCentered />
      ) : (
        <PolicyList
          refetch={refetch}
          inputs={inputs}
          arrayInputs={arrayInputs}
          userProfile={userProfile}
          updateMutation={updateMutation}
          createMutation={createMutation}
          deleteMutation={deleteMutation}
          edges={data[edgesKey].edges}
        >
          {children}
        </PolicyList>
      )}
    </PageWrapper>
  )
}
