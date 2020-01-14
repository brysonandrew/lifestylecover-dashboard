import * as React from "react"
import styled from "styled-components"
import { Button } from "./button"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 12px;
`

const ButtonStyled = styled(Button)`
  && {
    font-size: 28px;
    height: 60px;
    width: 260px;
    & span {
      position: relative;
      bottom: 1px;
    }
  }
`

type TProps = { children: React.ReactNode, isSubmitting: boolean }

export const Submit = (props: TProps) => {
  return (
    <Wrapper>
      <ButtonStyled variant="contained" color="primary" disabled={props.isSubmitting} type="submit">
        {props.children}
      </ButtonStyled>
    </Wrapper>
  )
}
