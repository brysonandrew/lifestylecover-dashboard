import * as React from "react"
import styled from "styled-components"
import { color } from "../../data"
import { Modal, Button } from "@material-ui/core"

// const Wrapper = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// `

// const Modal = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;

//   min-width: 280px;
// `

const Content = styled.div`
  padding: 20px 28px;
  background-color: ${color.offWhite};
`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

type TProps = {
  onCloseClick(): void
  onDeleteClick(): void
  children: React.ReactNode
}

export const DeleteModal = (props: TProps) => {
  const { children, onCloseClick, onDeleteClick } = props
  return (
    <Modal
      disablePortal
      disableEnforceFocus
      disableAutoFocus
      open
      aria-labelledby="server-modal-title"
      aria-describedby="server-modal-description"
      container={() => document.body}
    >
      <Content>
        {children}
        <Buttons>
          <Button onClick={onCloseClick}>
            Cancel
          </Button>
          <Button onClick={onDeleteClick}>
            Ok
          </Button>
        </Buttons>
      </Content>
    </Modal>
  )
}
