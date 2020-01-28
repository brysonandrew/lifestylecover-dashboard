import * as React from "react"
import styled from "styled-components"
import { ModalCentered } from "../../../common/modals"
import { ModalButtons } from "../../../common/modals/modal-buttons"
import { AsyncStartIcon } from "../../../common/buttons/async-start-icon"
import { useDataToSeeIfSuccess, useRefetch } from "../../../utils/custom-hooks"

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
    { loading, error, data },
  ] = deleteMutation

  const handleRefetch = () => {
    onClose()
    refetch()
  }

  const isSuccess = useDataToSeeIfSuccess(data?.deletePolicyAsset?.deletedId)
  const isRefetchTriggered = useRefetch(isSuccess, handleRefetch)

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
        okIcon={(
          <AsyncStartIcon
            isLoading={loading}
            isSuccess={isSuccess}
            isError={error}
          />
        )}
      >
        Delete
      </ModalButtons>
    </ModalCentered>
  )
}
