import * as React from "react"
import styled from "styled-components"
import { Button as MaterialButton } from "@material-ui/core"
import { COLOR_4, COLOR_5 } from "../../data"

const MaterialButtonStyled = styled(MaterialButton)`
  && {
    background-color: ${COLOR_4};
    font-size: 28px;
    &:hover {
      background-color: ${COLOR_5};
    }
  }
`

type TButtonProps = {
  onClick?(): void
  children: string | JSX.Element | JSX.Element[]
  disabled?: boolean
  type?: string
  style?: any
}

export const Button = (props: TButtonProps) => {
  const { children, ...remainingProps } = props
  return (
    <MaterialButtonStyled {...remainingProps}>{children}</MaterialButtonStyled>
  )
}
