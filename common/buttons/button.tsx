import * as React from "react"
import styled from "styled-components"
import { Button as MaterialButton } from "@material-ui/core"
import { color } from "../../data"

const MaterialButtonStyled = styled(MaterialButton)`
  && {
    text-transform: capitalize;
    background-color: ${color.highlightGreen};
    font-size: 28px;
    &:hover {
      background-color: ${color.darkGreen};
    }
  }
`

type TProps = {
  onClick?(): void
  children: React.ReactNode
  disabled?: boolean
  type?: string
  style?: any
}

export const Button = (props: TProps) => {
  const { children, ...remainingProps } = props
  return (
    <MaterialButtonStyled {...remainingProps}>{children}</MaterialButtonStyled>
  )
}
