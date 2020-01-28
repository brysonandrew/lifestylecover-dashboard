import React from "react"
import id from "uniqid"
import styled from "styled-components"
import { TextField, TextFieldArray } from "../../../common"
import { placeholder } from "../../../data-placeholders"
import {
  BENEFIT_RISK_INIT,
  POLICY_RISK_TEXT_INPUTS,
} from "../../../data-initial-values-policy"
import { fromCamelCase, initializeFormValues } from "../../../utils"
import { SubItemWrapper } from "../../../common/sub-item-wrapper"
const name = "benefit"

export const PolicyRiskInputs = props => {
  if (props.values) {
    return (
      <>
        {Object.keys(POLICY_RISK_TEXT_INPUTS).map(key => (
          <TextField
            key={key}
            label={fromCamelCase(key)}
            placeholder={placeholder.user.unknown}
            name={key}
            type={key.indexOf("date") > -1 ? "date" : null}
          />
        ))}
        <TextFieldArray
          name={name}
          title={name}
          initialItem={BENEFIT_RISK_INIT}
          values={props.values.benefits}
        >
          {(_, index) => (
            <SubItemWrapper key={`${name}-${index}`}>
              {Object.keys(BENEFIT_RISK_INIT).map(key => (
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
      </>
    )
  } else {
    return null
  }
}
