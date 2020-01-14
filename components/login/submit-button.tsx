import React, { RefObject } from "react"
import styled from "styled-components"
import { Submit } from "../../common/buttons"
import { LinearProgress, CircularProgress } from "@material-ui/core"

const Wrapper = styled.div`
  background-color: white;
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`

type TProps = {
  isLoading: boolean
}

export const SubmitButton = (props: TProps) => {
  const { isLoading } = props

  return (
    <Submit     
      isSubmitting={isLoading}
    >
      {isLoading
        ? <CircularProgress/>
        : 'Submit'}
    </Submit>
  )
}

