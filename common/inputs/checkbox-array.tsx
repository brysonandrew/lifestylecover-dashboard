import * as React from "react"
import { Field } from "formik"
import { Checkbox } from "@material-ui/core"

export const CheckboxArray = () => {
  return (
    <>
      <div>cookies:</div>
      <Field
        name="cookies"
        type="checkbox"
        value="chocolate chip"
        as={Checkbox}
      />
      <Field
        name="cookies"
        type="checkbox"
        value="snickerdoodle"
        as={Checkbox}
      />
      <Field name="cookies" type="checkbox" value="sugar" as={Checkbox} />
    </>
  )
}
