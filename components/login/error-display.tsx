import React from "react"
import styled from "styled-components"
import { renderSwitch } from "../../utils"
import { color } from "../../data"

const Wrapper = styled.div`
  color: ${color.teal};
  margin-top: 24px;
  font-size: 18px;
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
