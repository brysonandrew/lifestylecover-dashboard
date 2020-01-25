import * as React from "react"
import styled from "styled-components"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { PageWrapper, LoadingCentered } from "../../../common"
import { List } from "../.."
import { POLICY_DELETE_RISK_MUTATION, POLICY_CREATE_RISK_MUTATION, POLICY_GET_RISK_LIST_QUERY, POLICY_UPDATE_RISK_MUTATION } from "../../../utils"
import { TPolicy, TUserProfile } from "../../../models"
import { PolicyEditableForm } from "../policy-editable-form"
import { PolicyRiskInputs } from "./policy-risk-inputs"
import { PolicyDeleteContent } from "../policy-delete-content"

const INPUTS = {
  title: ""
}

type TProps = {
  userProfile: TUserProfile
}

export const PolicyRisk = (props: TProps) => {
  const { loading, error, data: getListData } = useQuery(POLICY_GET_RISK_LIST_QUERY, {});
  const [handleCreatePolicy, createMutation] = useMutation(POLICY_CREATE_RISK_MUTATION);
  const [handleDeletePolicy, deleteMutation] = useMutation(POLICY_DELETE_RISK_MUTATION);

  return (
    <PageWrapper title="Policy Risk">
      {loading
        ? (
          <LoadingCentered />
        )
        : (
          <List
            addConfig={{
              inputs: Object.keys(INPUTS),
              onAdd: (values) => handleCreatePolicy({ variables: { title: values.title } })
            }}
            deleteConfig={{
              component: (values: TPolicy) => (
                <PolicyDeleteContent
                  title={values.title}
                />
              ),
              onDelete: (info) => {
                handleDeletePolicy({
                  variables: {
                    id: info.id,
                  },
                })
              }
            }}
          >
            {getListData && getListData.policiesRisk.edges.map(edge => ({
              ...edge.node,
              component: (isEditing: boolean) => (
                <PolicyEditableForm
                  key={edge.node.id}
                  isEditing={isEditing}
                  policyInfo={edge.node}
                  initValues={INPUTS}
                  mutation={useMutation(POLICY_UPDATE_RISK_MUTATION)}
                >
                  <PolicyRiskInputs />
                </PolicyEditableForm>
              )
            }))}
          </List>
        )}
    </PageWrapper>
  )
}
