import React from "react"
import { Button } from "@material-ui/core"
import { ButtonWrapper } from "."
import { AsyncStartIcon, TAsyncStartIconProps } from "./async-start-icon"

type TProps = {
  startIconConfig?: TAsyncStartIconProps
  onClick(): void
}

export const SubmitButton = (props: TProps) => {
  const { startIconConfig, onClick } = props
  return (
    <ButtonWrapper>
      <Button
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        disabled={startIconConfig.isLoading || startIconConfig.isSuccess}
        onClick={onClick}
        startIcon={(
          <AsyncStartIcon
            {...startIconConfig}
          />
        )}
      >
        Save
      </Button>
    </ButtonWrapper>
  )
}

