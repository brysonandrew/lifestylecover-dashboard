import * as React from "react"
import styled from "styled-components"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { PageWrapper, LoadingCentered } from "../../../common"
import { List } from "../.."
import { POLICY_GET_ASSET_LIST_QUERY, POLICY_CREATE_ASSET_MUTATION, POLICY_DELETE_ASSET_MUTATION, POLICY_UPDATE_ASSET_MUTATION } from "../../../utils"
import { TPolicy, TUserProfile } from "../../../models"
import { PolicyEditableForm } from "../policy-editable-form"
import { PolicyAssetInputs } from "./policy-asset-inputs"
import { PolicyDeleteContent } from "../policy-delete-content"

const INPUTS = {
  title: ""
}

type TProps = {
  userProfile: TUserProfile
}

export const PolicyAsset = (props: TProps) => {
  const { loading, error, data: getListData } = useQuery(POLICY_GET_ASSET_LIST_QUERY, {});
  const [onCreatePolicy, createMutation] = useMutation(POLICY_CREATE_ASSET_MUTATION);
  const [handleDeletePolicy, deleteMutation] = useMutation(POLICY_DELETE_ASSET_MUTATION);

  return (
    <PageWrapper title="Policy Asset">
      {loading
        ? (
          <LoadingCentered />
        )
        : (
          <List
            addConfig={{
              inputs: Object.keys(INPUTS),
              onAdd: (values) => onCreatePolicy({ variables: { title: values.title } })
            }}
            deleteConfig={{
              component: (values: TPolicy) => {
                console.log(values)
                return (
                  <PolicyDeleteContent
                    title={values.title}
                  />
                )
              },
              onDelete: (info) => {
                handleDeletePolicy({
                  variables: {
                    id: info.id,
                  },
                })
              }
            }}
          >
            {getListData && getListData.policiesAsset.edges.map(edge => ({
              ...edge.node,
              component: (isEditing: boolean) => (
                <PolicyEditableForm
                  key={edge.node.id}
                  isEditing={isEditing}
                  policyInfo={edge.node}
                  initValues={INPUTS}
                  mutation={useMutation(POLICY_UPDATE_ASSET_MUTATION)}
                >
                  <PolicyAssetInputs />
                </PolicyEditableForm>
              )
            }))}
          </List>
        )}
    </PageWrapper>
  )
}
