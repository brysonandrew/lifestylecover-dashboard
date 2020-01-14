import React from "react"
import { CircularProgress, Button } from "@material-ui/core"

export const SubmitButton = (props: any) => {
  const { isLoading, children, ...buttonProps } = props
  return (
    <Button     
      {...buttonProps}
      disabled={isLoading}
    >
      {isLoading
        ? <CircularProgress/>
        : children}
    </Button>
  )
}

