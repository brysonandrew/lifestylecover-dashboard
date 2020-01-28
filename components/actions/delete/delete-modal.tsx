import * as React from "react"
import styled from "styled-components"
import { CircularProgress } from "@material-ui/core"
import { ModalCentered } from "../../../common/modals"
import { ModalButtons } from "../../../common/modals/modal-buttons"
import { Delete } from "@material-ui/icons"

type TProps = {
  info: any
  onClose(): void
  deleteConfig: any
  children: React.ReactNode
}

export const DeleteModal = (props: TProps) => {
  const { info, children, onClose, deleteConfig } = props
  const { refetch, deleteMutation } = deleteConfig
  const [
    handleDeletePolicy,
    { loading, error, data, called },
  ] = deleteMutation
  React.useEffect(() => {
    if (data && !error) {
      refetch()
      onClose()
    }
  }, [data])
  return (
    <ModalCentered
      onBackdropClick={onClose}
    >
      {children}
      <ModalButtons
        onClose={onClose}
        onOk={() => {
          handleDeletePolicy({
            variables: {
              id: info.id,
            },
          })
        }}
        okIcon={
          loading ? <CircularProgress size={18} color="inherit" /> : <Delete />
        }
      >
        Delete
      </ModalButtons>
    </ModalCentered>
  )
}
