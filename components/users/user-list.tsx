import * as React from "react"
import { FormWrapper } from "../../common/form-wrapper"
import { useQuery } from "@apollo/react-hooks"
import { USER_GET_LIST_QUERY } from "../../utils/graphql/user-get-list.query"

enum EUserType {
  administrator = 'administrator',
  client = 'client',
  advisor = 'advisor',
}

type TProps = {
  userType?: EUserType
}

export const UserList = (props: TProps) => {
  const queryResult = useQuery(USER_GET_LIST_QUERY, {
    // variables: { id: "dXNlcjox" },
  });
  const { loading, error, data } = queryResult
  console.log(queryResult)

  console.log(queryResult)
  return (
    <FormWrapper>
      <h2>User List</h2>
      {loading
        ? (
          <div>loading...</div>
        )
        : (          
          <ul>
            {data && data.users.edges.map(edge => {
              const { id, name } = edge.node
              return (
                <li key={id}>
                  {name}
                </li>
              )
            })}
          </ul>
        )}
    </FormWrapper>
  )
}
