import { createStore, action, Action } from "easy-peasy";

export type TSeverity = 'success' | 'info' | 'warning' | 'error';

export type TPayload = {
  message: string
  severity?: TSeverity
  redirect?: string
}

export interface SnackbarModel {
  open: boolean;
  message: string;
  handleClose: Action<SnackbarModel, void>;
  handleOpen: Action<SnackbarModel, TPayload>;
  severity?: TSeverity
  redirect?: string
}

export interface Model {
  snackbar: SnackbarModel;
}

const model: Model = {
  snackbar: {
    open: false,
    message: "",
    handleClose: action(s => {
      s.open = false;
    }),
    handleOpen: action((s, p: TPayload) => {
      s.open = true;
      s.message = p.message;
      s.severity = p.severity
      s.redirect = p.redirect
    })
  }
};

export const snackbarStore = createStore(model);

