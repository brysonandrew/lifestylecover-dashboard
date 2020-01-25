import React from "react"
import { CircularProgress, Button } from "@material-ui/core"
import { ButtonWrapper } from "."
import { Save } from "@material-ui/icons"

type TProps = {
  isLoading: boolean
  onClick(): void
}

export const SubmitButton = (props: TProps) => {
  const { isLoading, onClick } = props
  return (
    <ButtonWrapper>
      <Button
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        disabled={isLoading}
        onClick={onClick}
        startIcon={
          isLoading
            ? (
              <CircularProgress size={18} color="inherit" />
            ) : (
              <Save />
            )
        }
      >
        Save
      </Button>
    </ButtonWrapper>
  )
}

