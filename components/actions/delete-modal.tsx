import * as React from "react"
import styled from "styled-components"
import { color } from "../../data"
import { Modal, Button, Paper } from "@material-ui/core"

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

const Content = styled(Paper)`
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 20px 28px;
  background-color: ${color.offWhite};
  transform: translate(-50%,-50%);
`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 24px;
`

type TProps = {
  info: any
  onClose(): void
  deleteConfig: any
  children: React.ReactNode
}

export const DeleteModal = (props: TProps) => {
  const { info, children, onClose, deleteConfig } = props
  console.log(info)
  const [handleDeletePolicy, { loading, error, data, called }] = deleteConfig.deleteMutation
  React.useEffect(() => {
    if (!loading && called) {
      onClose()
    }
  }, [loading])
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
          <Button onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={() => {
              handleDeletePolicy({
                variables: {
                  id: info.id,
                },
              })
            }}>
            Ok
          </Button>
        </Buttons>
      </Content>
    </Modal>
  )
}
