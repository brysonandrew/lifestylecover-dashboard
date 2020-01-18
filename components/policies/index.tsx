import * as React from "react"
import styled from "styled-components"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { POLICY_GET_LIST_QUERY } from "../../utils/graphql/policy-get-list.query"
import { LoadingCentered } from "../../common"
import { List } from ".."
import { POLICY_CREATE_MUTATION } from "../../utils/graphql/policy-create.mutation"
import { PolicyEditable } from "./policy-editable"
import { TPolicy } from "../../models/users"

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

type TProps = {
}

export const Policies = (props: TProps) => {
  const { loading, error, data } = useQuery(POLICY_GET_LIST_QUERY, {});
  const [onSaveNewPolicy, updateConfig] = useMutation(POLICY_CREATE_MUTATION);
  console.log(data)

  return (
    <Wrapper>
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
              onAdd: (values) => onSaveNewPolicy({ variables: { title: values.title } })
            }}
          >
            {data.policies.edges.map(edge => ({
              id: edge.node.id,
              displayComponent: (
                <div>
                  {edge.node.title}
                </div>
              ),
              editComponent: (info: TPolicy) => (
                <PolicyEditable {...info} />
              )
            }))}
          </List>
        )}
    </Wrapper>
  )
}
