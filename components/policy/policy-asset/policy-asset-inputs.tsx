import React from "react"
import styled from "styled-components"
import { TextField, TextFieldArray, SubItemWrapper } from "../../../common"
import { placeholder } from "../../../data-placeholders"
import { BENEFIT_ASSET_INIT } from "../../../data-initial-values-policy"
import { fromCamelCase } from "../../../utils"
const name = "benefit"

type TProps = {
  values?: any
}

export const PolicyAssetInputs = (props: TProps) => {
  return (
    <div>
      <TextField
        label="Reference Number"
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
          <SubItemWrapper key={`${name}-${index}`}>
            {Object.keys(BENEFIT_ASSET_INIT).map(key => (
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
