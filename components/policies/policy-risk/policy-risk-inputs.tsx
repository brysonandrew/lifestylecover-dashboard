import React from "react"
import styled from "styled-components"
import { TextField, TextFieldArray } from "../../../common"
import { placeholder } from "../../../data-placeholders"
import { BENEFIT_RISK_INIT } from "../../../data-initial-values"
import { fromCamelCase } from "../../../utils"

export const PolicyRiskInputs = (props) => {
  return (
    <div>
      <TextField
        label="Title"
        placeholder={placeholder.user.unknown}
        name="title"
      />
      <TextFieldArray
        name={name}
        title={name}
        initialItem={BENEFIT_RISK_INIT}
        values={props.values.educations}
      >
        {(_, index) => (
          <div>
            {Object.keys(BENEFIT_RISK_INIT).map((key) => (
              <div key={key}>
                <TextField
                  label={fromCamelCase(key)}
                  placeholder={placeholder.user.unknown}
                  name={`risks.${index}.${key}`}
                  type={key.indexOf('date') > -1 ? 'date' : null}
                />
              </div>
            ))}
          </div>
        )}
      </TextFieldArray>
    </div>
  )
}
