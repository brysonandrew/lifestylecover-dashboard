import React from "react"
import styled from "styled-components"
import { renderSwitch } from "../../utils"

const Wrapper = styled.div`
  color: red;
  margin-top: 8px;
  text-align: center;
  font-size: 14px;
`

type TProps = {
  children: any
}

export const ErrorDisplay = (props: TProps) => {

  if (props.children) {
    return (
      <Wrapper>
        {renderSwitch(props.children.message, {
          'GraphQL error: Sorry, you are not allowed to create a new user.': () => 'Not allowed to create a new user',
          'GraphQL error: invalid_username': () => 'Username doesn\'t exist',
          'GraphQL error: incorrect_password': () => 'Incorrect password'
        }, () => "Something went wrong")}
      </Wrapper>
    )
  } else {
    return null
  }
}
