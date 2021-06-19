import * as React from "react"
import { PageWrapper, LoadingCentered } from "../../common"
import { TPolicyProps } from "../../models/policy"
import { PolicyList } from "./policy-list"
import { PaperError } from "../../common/paper-error"

type TProps = {
  title: string
  icon: JSX.Element
  inputs: any
  arrayInputs?: any
  children: JSX.Element
} & TPolicyProps

export const PolicyController = (props: TProps) => {
  const { children, inputs, arrayInputs, isLoading, edges, error, refetch, title, icon, userProfile, updateMutation, createMutation, deleteMutation } = props
  return (
    <PageWrapper title={title} icon={icon}>
      {isLoading
        ? (
          <LoadingCentered />
        )
        : error
          ? (
            <PaperError>
              An error occured.
            </PaperError>
          )
          :
            ( 
            <PolicyList
              inputs={inputs}
              arrayInputs={arrayInputs}
              userProfile={userProfile}
              updateMutation={updateMutation}
              createMutation={createMutation}
              deleteMutation={deleteMutation}
              refetch={refetch}
              edges={edges}
            >
              {children}
            </PolicyList>
          )
      }
    </PageWrapper>
  )
}
