import { FieldAttributes } from "formik"

export type TTextFieldProps = { label?: string } & FieldAttributes<{}>

export enum EProfileInputType {
  Contact = 'Contact',
  Details = 'Details'
}

export enum EPolicyInputType {
  Risk = 'Risk',
  Asset = 'Asset',
  Kiwisaver = 'Kiwisaver',
  Pet = 'Pet',
}
