import * as React from "react"
import styled from "styled-components"
import { Button as MaterialButton } from "@material-ui/core"
import { color } from "../../data"

const MaterialButtonStyled = styled(MaterialButton)`
  && {
    border-radius: 0;
    text-transform: capitalize;
    background-color: ${color.green};
    font-size: 28px;
    &:hover {
      background-color: ${color.cyan};
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

export const ButtonSquare = (props: TProps) => {
  const { children, ...remainingProps } = props
  return (
    <MaterialButtonStyled {...remainingProps}>{children}</MaterialButtonStyled>
  )
}
