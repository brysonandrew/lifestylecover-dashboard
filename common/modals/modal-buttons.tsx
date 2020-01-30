import * as React from "react"
import styled from "styled-components"
import { Button } from "@material-ui/core"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 24px;
`

type TProps = {
  onClose(): void
  onOk(): void
  okIcon: React.ReactNode
  children: any
}

export const ModalButtons = (props: TProps) => {
  const { onClose, onOk, okIcon, children } = props
  return (
    <Wrapper>
      <Button onClick={onClose}>
        Cancel
      </Button>
      <Button onClick={onOk} startIcon={okIcon}>
        {children}
      </Button>
    </Wrapper>
  )
}
