import React from "react"
import styled from "styled-components"
import { TextField } from "../../../common"
import { placeholder } from "../../../data-placeholders"
import { fromCamelCase } from "../../../utils"
import { POLICY_KIWISAVER_INIT } from "../../../data-initial-values-policy"
import { PolicyFixedInputs } from "../policy-fixed-inputs"
import { EFormType } from "../../../models"

type TProps = {
  values?: any
  formType?: EFormType
  isClient?: boolean
}

export const PolicyKiwisaverInputs = ({ formType, isClient }: TProps) => {
  const [title, ...nonFixedInputKeys] = Object.keys(POLICY_KIWISAVER_INIT)
  return (
    <PolicyFixedInputs isClient={isClient} formType={formType}>
      <>
        {nonFixedInputKeys.map(key => (
          <TextField
            key={key}
            label={fromCamelCase(key)}
            placeholder={placeholder.user.unknown}
            name={key}
            type={key.indexOf("date") > -1 ? "date" : null}
          />
        ))}
      </>
    </PolicyFixedInputs>
  )
}
