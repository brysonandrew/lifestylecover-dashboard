import React from "react"
import { CircularProgress } from "@material-ui/core"
import { Save, CheckCircle, ErrorOutline } from "@material-ui/icons"

export type TAsyncStartIconProps = {
  isLoading: boolean
  isSuccess?: boolean
  isError?: boolean
}

export const AsyncStartIcon = (props: TAsyncStartIconProps) => {
  const { isLoading, isSuccess, isError } = props
  if (isLoading) {
    return <CircularProgress size={18} color="inherit" />
  } else if (isError) {
    return <ErrorOutline color="inherit"/>
  } else if (isSuccess) {
    return <CheckCircle  color="inherit"/>
  } else {
    return <Save  color="inherit"/>
  }
}
