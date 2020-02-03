import React from "react"
import id from "uniqid"
import styled from "styled-components"
import { TextField, TextFieldArray, SubItemWrapper } from "../../../common"
import { placeholder } from "../../../data-placeholders"
import {
  BENEFIT_RISK_INIT,
  POLICY_RISK_TEXT_INPUTS,
} from "../../../data-initial-values-policy"
import { fromCamelCase } from "../../../utils"
const name = "benefit"

type TProps = {
  values?: any
  isClient?: boolean
}

export const PolicyRiskInputs = ({values, isClient}: TProps) => {
  if (values) {
    return (
      <>
        {Object.keys(POLICY_RISK_TEXT_INPUTS).map(key => (
          <TextField
            key={key}
            label={key === "title" ? "Reference Number" : fromCamelCase(key)}
            disabled={key === "title" && isClient}
            placeholder={placeholder.user.unknown}
            name={key}
            type={key.indexOf("date") > -1 ? "date" : null}
          />
        ))}
        <TextFieldArray
          name={name}
          namePlural={`${name}s`}
          title={name}
          initialItem={BENEFIT_RISK_INIT}
          values={values.benefits}
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
