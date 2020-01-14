import * as React from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/react-hooks"
import { USER_GET_LIST_QUERY } from "../../utils/graphql/user-get-list.query"
import { LoadingCentered } from "../../common/loading"

const Wrapper = styled.div`
  
`

const List = styled.ul`
  
`

const Item = styled.li`
  
`

type TProps = {}

export const Policies = (props: TProps) => {
  // const { loading, error, data } = useQuery(USER_GET_LIST_QUERY, {});
  // console.log(data)
  const loading = false
  return (
    <Wrapper>
      {loading
        ? (
          <LoadingCentered/>
        )
        : (
          <List>
            <Item>
              Policy 1
            </Item>
          </List>
        )}
    </Wrapper>
  )
}
