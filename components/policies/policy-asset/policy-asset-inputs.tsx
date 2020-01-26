import React from "react"
import styled from "styled-components"
import { TextField, TextFieldArray } from "../../../common"
import { placeholder } from "../../../data-placeholders"
import {
  BENEFIT_ASSET_INIT,
  BENEFIT_RISK_INIT,
} from "../../../data-initial-values"
import { fromCamelCase } from "../../../utils"
const name = "benefit"

type TProps = {
  values?: any
}

export const PolicyAssetInputs = (props: TProps) => {
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
        initialItem={BENEFIT_ASSET_INIT}
        values={props.values.benefits}
      >
        {(_, index) => (
          <div>
            {Object.keys(BENEFIT_RISK_INIT).map(key => (
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
