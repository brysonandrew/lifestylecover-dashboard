import { FieldAttributes } from "formik"

export type TTextFieldProps = { label?: string } & FieldAttributes<{}>

export enum EProfileInputType {
  Contact = "Contact",
  Details = "Details",
}

export enum EPolicyInputType {
  Risk = "Risk",
  Asset = "Asset",
  Kiwisaver = "Kiwisaver",
  Pet = "Pet",
}

export type TAddConfig = {
  inputs: Record<string, string>
  createMutation: any
  createVariables(values: any): any
  componentInputs?: JSX.Element
}

export type TDeleteConfig = {
  deleteMutation: any
  deleteText(values: any): string
}

export type TItem = {
  itemInfo: any
  component(isEditing: boolean): JSX.Element
}
