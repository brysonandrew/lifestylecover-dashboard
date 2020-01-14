import * as React from "react"
import styled from "styled-components"
import { color } from "../../data"
import { Modal, Button } from "@material-ui/core"
import { useMutation } from "@apollo/react-hooks"
import { USER_DELETE_MUTATION } from "../../utils/graphql/user-delete.mutation"

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
  id: string
  name: string
  isEditing: boolean
  onSetEdit(): void
}

export const DeleteModal = (props: any) => {
  const { id, name, isEditing } = props
  const handleClick = () => {
    const { } = useMutation(USER_DELETE_MUTATION, { variables: {id}})
  }
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
        <h2 id="server-modal-title">{`Are you sure you want to delete user ${name}?`}</h2>
        <Buttons>
          <Button>
            Cancel
          </Button>
          <Button onClick={handleClick}>
            Ok
          </Button>
        </Buttons>
      </Content>
    </Modal>
  )
}
