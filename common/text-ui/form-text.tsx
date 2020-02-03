import * as React from "react"
import styled from "styled-components"
import { TextFieldText } from "./text-field-text"
import { CheckboxText } from "./checkbox-text"
import { ArrayText } from "./array-text"
import { isBoolean, isArray } from "util"
import { REPEATER_DEFAULT_KEY } from "../../data"

const Wrapper = styled.div`
  text-align: left;
`

const resolveLabel = (label: string, isPolicy?: boolean) => {
  if (isPolicy && label.toLowerCase() === 'title') {
    return 'Reference Number'
  } else if (label === REPEATER_DEFAULT_KEY) {
    return null
  } else {
    return label
  }
}

type TProps = {
  children: any
  isPolicy?: boolean
  arrayInputs?: any
  reviewMetaObj?: any
}

export const FormText = (props: TProps) => {
  const { children, arrayInputs, reviewMetaObj, isPolicy } = props
  return (
    <Wrapper>
      {Object.keys(children).map((label: any) => {
        const reviewValue = reviewMetaObj
          && reviewMetaObj[label]
          && JSON.stringify(reviewMetaObj[label]) !== JSON.stringify(children[label])
            ? reviewMetaObj[label]
            : null
        if (isArray(children[label])) {
          return (
            <ArrayText key={label} arrayInputs={arrayInputs} reviewPairs={reviewValue}>
              {children[label]}
            </ArrayText>
          )
        } else if (isBoolean(children[label])) {
          return (
            <CheckboxText key={label} isChecked={children[label] as boolean}>
              {label}
            </CheckboxText>
          )
        } else {
          if (label !== '__typename') {
            return (
              <TextFieldText key={label} label={resolveLabel(label, isPolicy)} reviewValue={reviewValue}>
                {children[label]}
              </TextFieldText>
            )
          } else {
            return null
          }
        }
      })}
    </Wrapper>
  )
}
