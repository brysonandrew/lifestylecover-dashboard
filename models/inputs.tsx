import { FieldAttributes } from "formik"

export type TTextFieldProps = { label?: string } & FieldAttributes<{}>

export enum EInputType {
  Contact = 'Contact',
  Details = 'Details'
}
