import * as React from "react"
import styled from "styled-components"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { POLICY_GET_LIST_QUERY } from "../../utils/graphql/policy-get-list.query"
import { LoadingCentered } from "../../common"
import { List } from ".."
import { POLICY_CREATE_MUTATION } from "../../utils/graphql/policy-create.mutation"
import { PolicyEditable } from "./policy-editable"
import { POLICY_DELETE_MUTATION } from "../../utils/graphql/policy-delete.mutation"
import { POLICY_UPDATE_MUTATION } from "../../utils/graphql/policy-update.mutation"
import { TPolicy } from "../../models/users"
import { PageWrapper } from "../../common/page-wrapper"

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

type TProps = {
}

export const Policies = (props: TProps) => {
  const { loading, error, data: getListData } = useQuery(POLICY_GET_LIST_QUERY, {});
  const [onCreatePolicy, createMutation] = useMutation(POLICY_CREATE_MUTATION);
  const [onDeletePolicy, deleteMutation] = useMutation(POLICY_DELETE_MUTATION);
  console.log(getListData)

  return (
    <PageWrapper title="Policies">
      {loading
        ? (
          <LoadingCentered />
        )
        : (
          <List
            addConfig={{
              inputs: [
                'title',
              ],
              onAdd: (values) => onCreatePolicy({ variables: { title: values.title } })
            }}
            deleteConfig={{
              component: (values: TPolicy) => (
                <h2>{`Are you sure you want to delete policy ${values.title}?`}</h2>
              ),
              onDelete: () => onDeletePolicy
            }}
          >
            {getListData && getListData.policies.edges.map(edge => ({
              id: edge.node.policyId,
              component: (isEditing: boolean) => (
                <PolicyEditable isEditing={isEditing} policyInfo={edge.node} />
              )
            }))}
          </List>
        )}
    </PageWrapper>
  )
}
