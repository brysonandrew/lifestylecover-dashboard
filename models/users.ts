
export enum EUserType {
  administrator = 'administrator',
  client = 'client',
  advisor = 'advisor',
}

export enum EUserAction {
  Add = 'Add',
  Edit = 'Edit',
  Delete = 'Delete',
  Save = 'Save',
}

export interface IUserActionConfig {
  action: EUserAction,
  userInfo: any
}

export interface IUserActionControlConfig {
  action: EUserAction,
  callback(): void
  icon: JSX.Element
}
