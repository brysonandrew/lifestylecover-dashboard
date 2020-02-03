import React from "react"
import styled from "styled-components"
import { TextField } from "../../../common"
import { placeholder } from "../../../data-placeholders"
import { fromCamelCase } from "../../../utils"
import { POLICY_KIWISAVER_INIT } from "../../../data-initial-values-policy"

type TProps = {
  values?: any
  isClient?: boolean
}

export const PolicyKiwisaverInputs = ({values, isClient}: TProps) => {
  return (
    <div>
      {Object.keys(POLICY_KIWISAVER_INIT).map(key => (
        <TextField
          key={key}
          label={key === "title" ? "Reference Number" : fromCamelCase(key)}
          disabled={key === "title" && isClient}
          placeholder={placeholder.user.unknown}
          name={key}
          type={key.indexOf("date") > -1 ? "date" : null}
        />
      ))}
    </div>
  )
}
