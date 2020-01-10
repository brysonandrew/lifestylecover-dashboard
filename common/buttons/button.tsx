import * as React from "react"
import styled from "styled-components"
import { Button as MaterialButton } from "@material-ui/core"
import { COLOR_4, COLOR_5, COLOR_2, COLOR_3 } from "../../data"

const MaterialButtonStyled = styled(MaterialButton)`
  && {
    text-transform: capitalize;
    background-color: ${COLOR_2};
    font-size: 28px;
    &:hover {
      background-color: ${COLOR_3};
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
