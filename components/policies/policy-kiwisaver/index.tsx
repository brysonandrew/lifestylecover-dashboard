import * as React from "react"
import styled from "styled-components"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { PageWrapper, LoadingCentered } from "../../../common"
import { List } from "../.."
import { POLICY_GET_KIWISAVER_LIST_QUERY, POLICY_CREATE_KIWISAVER_MUTATION, POLICY_DELETE_KIWISAVER_MUTATION, POLICY_UPDATE_KIWISAVER_MUTATION } from "../../../utils"
import { TPolicy, TUserProfile } from "../../../models"
import { PolicyEditableForm } from "../policy-editable-form"
import { PolicyKiwisaverInputs } from "./policy-kiwisaver-inputs"
import { PolicyDeleteContent } from "../policy-delete-content"

const INPUTS = {
  title: ""
}

type TProps = {
  userProfile: TUserProfile
}

export const PolicyKiwisaver = (props: TProps) => {
  const { loading, error, data: getListData } = useQuery(POLICY_GET_KIWISAVER_LIST_QUERY, {});
  const [onCreatePolicy, createMutation] = useMutation(POLICY_CREATE_KIWISAVER_MUTATION);
  const [handleDeletePolicy, deleteMutation] = useMutation(POLICY_DELETE_KIWISAVER_MUTATION);

  return (
    <PageWrapper title="Policy Kiwisaver">
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
            {getListData && getListData.policiesKiwisaver.edges.map(edge => ({
              ...edge.node,
              component: (isEditing: boolean) => (
                <PolicyEditableForm
                  key={edge.node.id}
                  isEditing={isEditing}
                  policyInfo={edge.node}
                  initValues={INPUTS}
                  mutation={useMutation(POLICY_UPDATE_KIWISAVER_MUTATION)}
                >
                  <PolicyKiwisaverInputs />
                </PolicyEditableForm>
              )
            }))}
          </List>
        )}
    </PageWrapper>
  )
}
