import React from "react"
import styled from "styled-components"
import { renderSwitch } from "../../utils"

const Wrapper = styled.div`
  color: red;
  margin-top: 24px;
  text-align: center;
`

type TProps = {
  children: any
}

export const ErrorDisplay = (props: TProps) => {

  if (props.children) {
    return (
      <Wrapper>
        {renderSwitch(props.children.message, {
          'GraphQL error: invalid_username': () => 'Username doesn\'t exist',
          'GraphQL error: incorrect_password': () => 'Incorrect password'
        }, () => "Something went wrong")}
      </Wrapper>
    )
  } else {
    return null
  }
}
