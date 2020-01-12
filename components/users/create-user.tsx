import * as React from "react"
import { Field } from "formik"
import { Checkbox } from "@material-ui/core"
import { TextField, Radio } from "../../common/inputs"
import { FormWrapper } from "../../common/form-wrapper"
import { CREATE_USER_PLACEHOLDER_LOOKUP } from "../../data-placeholders"

enum EUserType {
  administrator = 'administrator',
  client = 'client',
  advisor = 'advisor',
}

type TProps = {
  userType?: EUserType
}

export const CreateUser = (props: TProps) => {
  return (
    <FormWrapper>
      <TextField
        label="username"
        placeholder={CREATE_USER_PLACEHOLDER_LOOKUP.username}
        name="username"
      />
      <TextField
        label="password"
        placeholder={CREATE_USER_PLACEHOLDER_LOOKUP.password}
        name="password"
        type="password"
      />
      <div>
        {Object.keys(EUserType).map((userType) => (
          <Radio
            key={userType}
            name="user-type"
            type="radio"
            value={userType}
            label={userType}
          />
        ))}
      </div>
    </FormWrapper>
  )
}

  // const queryResult = useQuery(USER_GET_SINGLE_QUERY, {
  //   variables: { id: "dXNlcjox" },
  // });
  // const { loading, error, data } = queryResult
  // console.log(queryResult)
      {/* <Formik
        validateOnChange={true}
        initialValues={CREATE_USER_INIT}
        validationSchema={createUserValidationSchema}
        onSubmit={(data, { setSubmitting }) => {
          console.log(data)
          setSubmitting(true)
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <CreateUser/>
          </Form>
        )}
        </Formik> */}