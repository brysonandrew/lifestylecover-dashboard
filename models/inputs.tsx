import { FieldAttributes } from "formik"
import { EUserRole } from "./users"

export type TTextFieldProps = { label?: string } & FieldAttributes<{}>

export enum EProfileInput {
  Contact = "Contact",
  Details = "Details",
}

export enum EPolicy {
  Risk = "Risk",
  Asset = "Asset",
  Kiwisaver = "Kiwisaver",
  Pet = "Pet",
}

export type TAddConfig = {
  refetch(): void
  inputs: Record<string, string | number | any[]>
  createMutation: any
  createVariables(values: any): any
  componentInputs?: JSX.Element
}

export type TDeleteConfig = {
  refetch(): void
  deleteMutation: any
  deleteText(values: any): string
}

export type TEditConfig = {
  isEditing: boolean
  onSetEdit(): void
}

export type TItem = {
  userRole?: EUserRole
  itemInfo: any
  component(editConfig: TEditConfig): JSX.Element
}

export enum EFormType {
  Add = "Add",
  Edit = "Edit",
}
