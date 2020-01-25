export interface IDimensions {
  width: number
  height: number
  heightScreen?: number
  isWidthResizing?: boolean
  isHeightResizing?: boolean
}

export enum EAction {
  Add = "Add",
  Edit = "Edit",
  Delete = "Delete",
  Save = "Save",
}

export interface IActionConfig {
  action: EAction
  actionInfo: any
}

export interface IActionControlConfig {
  action: EAction
  callback(): void
  icon: JSX.Element
}

export * from './inputs'
export * from './users'
