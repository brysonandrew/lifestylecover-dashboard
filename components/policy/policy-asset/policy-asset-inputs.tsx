import React from "react"
import styled from "styled-components"
import { TextField, TextFieldArray, SubItemWrapper } from "../../../common"
import { placeholder } from "../../../data-placeholders"
import { BENEFIT_ASSET_INIT } from "../../../data-initial-values-policy"
import { fromCamelCase } from "../../../utils"
import { EUserRole, EFormType } from "../../../models"
import { PolicyFixedInputs } from "../policy-fixed-inputs"
const name = "benefit"

type TProps = {
  values?: any
  isClient?: boolean
  formType?: EFormType
}

export const PolicyAssetInputs = ({ isClient, values, formType }: TProps) => {
  return (
    <PolicyFixedInputs isClient={isClient} formType={formType}>
      <TextFieldArray
        name={name}
        namePlural={`${name}s`}
        title={`${name}s`}
        initialItem={BENEFIT_ASSET_INIT}
        values={values.benefits}
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
    </PolicyFixedInputs>
  )
}
