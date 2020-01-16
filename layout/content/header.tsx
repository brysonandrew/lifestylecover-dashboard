import React from "react"
import styled from "styled-components"
import { color, layoutSizes } from "../../data"
import { Button } from "@material-ui/core"
import { renderSwitch } from "../../utils"

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px 0 ${layoutSizes.nav.row + 24}px;
  width: 100%;
  height: ${layoutSizes.nav.row}px;
  background-color: ${color.white};
`

type TProps = {
  user: any
  onUpdateUser(user: any): void
}

const titleText = (user) => {
  if (user && user.username) {
    if (user.firstName) {
      return `Hi there, ${user.firstName}`
    } else {
      return `Hi there, ${user.username}`
    }
  } else {
    return 'Hi there!'
  }
}

export const Header = (props: TProps) => {
  const { user, onUpdateUser } = props
  const handleLogout = () => {
    onUpdateUser(null)
  }
  return (
    <Wrapper>
      <h2>
        {titleText(user)}
      </h2>
      <Button onClick={handleLogout}>
        Logout
      </Button>
    </Wrapper>
  )
}
