import React from "react"
import styled from "styled-components"
import { TextField, TextFieldArray, SubItemWrapper } from "../../../common"
import { placeholder } from "../../../data-placeholders"
import { PET_INIT } from "../../../data-initial-values-policy"
import { fromCamelCase } from "../../../utils"
const name = "pet"

export const PolicyPetInputs = props => {
  return (
    <div>
      <TextField
        label="Reference Number"
        placeholder={placeholder.user.unknown}
        name="title"
      />
      <TextFieldArray
        name={name}
        namePlural={`${name}s`}
        title={`${name}s`}
        initialItem={PET_INIT}
        values={props.values.pets}
      >
        {(_, index) => (
          <SubItemWrapper key={`${name}-${index}`}>
            {Object.keys(PET_INIT).map(key => (
              <TextField
                key={key}
                label={fromCamelCase(key)}
                placeholder={placeholder.user.unknown}
                name={`${name}s.${index}.${key}`}
                type={key.indexOf("date") > -1 ? "date" : null}
              />
            ))}
          </SubItemWrapper>
        )}
      </TextFieldArray>
    </div>
  )
}
