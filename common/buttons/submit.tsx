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
    font-size: 40px;
    height: 72px;
    width: 260px;
    & span {
      position: relative;
      bottom: 6px;
    }
  }
`

type TSubmitProps = { isSubmitting: boolean }

export const Submit = (props: TSubmitProps) => {
  return (
    <Wrapper>
      <Button disabled={props.isSubmitting} type="submit">
        download
      </Button>
    </Wrapper>
  )
}
