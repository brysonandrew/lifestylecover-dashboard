import React from "react"
import styled from "styled-components"
import { TextField } from "../../../common"
import { placeholder } from "../../../data-placeholders"
import { fromCamelCase } from "../../../utils"
import { POLICY_KIWISAVER_INIT } from "../../../data-initial-values"

export const PolicyKiwisaverInputs = () => {
  return (
    <div>
      <TextField
        label="Title"
        placeholder={placeholder.user.unknown}
        name="title"
      />
      {Object.keys(POLICY_KIWISAVER_INIT).map((key) => (
        <div key={key}>
          <TextField
            label={fromCamelCase(key)}
            placeholder={placeholder.user.unknown}
            name={key}
            type={key.indexOf('date') > -1 ? 'date' : null}
          />
        </div>
      ))}
    </div>
  )
}
