import { useStoreState, useStoreActions } from "easy-peasy";
import React from "react";
import { Model } from "./store";
import { renderSwitch } from "../../../utils";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

export const ErrorSnackbar: React.FC<{}> = () => {
  const { open, message } = useStoreState<Model, any>((state) => state.snackbar);
  const handleClose = useStoreActions<any, any>(
    actions => actions.snackbar.handleClose
  );
  return (
    <Snackbar
      open={open}
    >
      <Alert onClose={handleClose} severity="error">
        {renderSwitch(message, {
          'Sorry, you are not allowed to create a new user.': () => 'Not allowed to create a new user',
          'invalid_username': () => 'Username doesn\'t exist',
          'incorrect_password': () => 'Incorrect password'
        }, () => "Something went wrong")}
      </Alert>
    </Snackbar>
  )
};
