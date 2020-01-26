import React from "react"
import styled from "styled-components"
import { TextField, TextFieldArray } from "../../../common"
import { placeholder } from "../../../data-placeholders"
import { PET_INIT } from "../../../data-initial-values"
import { fromCamelCase } from "../../../utils"
const name = "pet"

export const PolicyPetInputs = props => {
  return (
    <div>
      <TextField
        label="Title"
        placeholder={placeholder.user.unknown}
        name="title"
      />
      <TextFieldArray
        name={name}
        title={`${name}s`}
        initialItem={PET_INIT}
        values={props.values.pets}
      >
        {(_, index) => (
          <div>
            {Object.keys(PET_INIT).map(key => (
              <div key={key}>
                <TextField
                  label={fromCamelCase(key)}
                  placeholder={placeholder.user.unknown}
                  name={`${name}s.${index}.${key}`}
                  type={key.indexOf("date") > -1 ? "date" : null}
                />
              </div>
            ))}
          </div>
        )}
      </TextFieldArray>
    </div>
  )
}
