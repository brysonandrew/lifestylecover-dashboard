import React, { ReactNode } from "react"
import styled from "styled-components"
import { Modal, Paper } from "@material-ui/core"
import { color } from "../../data"
import { sizes } from "../../utils-viewport"

const Wrapper = styled(Paper)`
  position: relative;
  margin: 100px auto 0;
  padding: 20px 28px;
  max-height: 80vh;
  overflow-y: scroll;
  background-color: ${color.offWhite};
  ${sizes.tablet`
    width: 520px;
 `}
  ${sizes.laptop`
    width: 750px;
 `}
`

type TProps = {
  children: ReactNode
}

export const ModalCentered = (props: TProps) => {
  return (
    <Modal
      disablePortal
      disableEnforceFocus
      disableAutoFocus
      open
      container={() => document.body}
    >
      <Wrapper>
        {props.children}
      </Wrapper>
    </Modal>
  )
}
