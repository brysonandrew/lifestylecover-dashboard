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
  refetch(): void
  inputs: Record<string, string>
  createMutation: any
  createVariables(values: any): any
  componentInputs?: JSX.Element
}

export type TDeleteConfig = {
  refetch(): void
  deleteMutation: any
  deleteText(values: any): string
}

export type TItem = {
  itemInfo: any
  component(isEditing: boolean): JSX.Element
}
