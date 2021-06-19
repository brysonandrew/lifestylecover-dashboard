import React from "react"
import styled from "styled-components"
import { Fab, Button } from "@material-ui/core"
import { ButtonWrapper } from "."
import { AsyncStartIcon, TAsyncStartIconProps } from "./async-start-icon"
import { color } from "../../data"

const ButtonText = styled.span`
  margin-left: 6px;
`

type TProps = {
  startIconConfig?: TAsyncStartIconProps
  onClick(): void
}

export const SubmitButton = (props: TProps) => {
  const { startIconConfig, onClick } = props
  return (
    <ButtonWrapper>
      <Button
        variant="outlined"
        color="secondary"
        size="large"
        type="submit"
        disabled={startIconConfig.isLoading || startIconConfig.isSuccess}
        onClick={onClick}
      >
        <AsyncStartIcon
          {...startIconConfig}
        />
        <ButtonText>
          Save
        </ButtonText>
      </Button>
    </ButtonWrapper>
  )
}

