import { useStoreState, useStoreActions } from "easy-peasy"
import React from "react"
import { Model } from "./store"
import { Snackbar } from "@material-ui/core"
import { Alert } from "@material-ui/lab"
import { useRouter } from "next/router"

export const ErrorSnackbar: React.FC<{}> = () => {
  const handleClose = useStoreActions<any, any>(
    actions => actions.snackbar.handleClose
  )
  const { open, message, severity, redirect } = useStoreState<Model, any>(
    state => state.snackbar
  )
  return (
    <Snackbar open={open}>
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export * from "./store"
        {/* {renderSwitch(
          message,
          {
            "Sorry, that email address is already used!": () =>
              "Email already in use.",
            "Sorry, you are not allowed to create a new user.": () =>
              "Not allowed to create a new user",
            invalid_username: () => "Username doesn't exist",
            incorrect_password: () => "Incorrect password",
          },
          () => "Something went wrong"
        )} */}