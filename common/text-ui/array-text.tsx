import * as React from "react"
import styled from "styled-components"
import { FormText } from "./form-text"
import { initializeFormValues } from "../../utils"
import { SubItemWrapper } from "../sub-item-wrapper"

const Wrapper = styled.div`
`

type TProps = {
  children: any[]
  arrayInputs: any
  reviewPairs?: any[]
}

export const ArrayText = (props: TProps) => {
  const { children, arrayInputs, reviewPairs } = props
  return (
    <Wrapper>
      {children.map((formState, i) => (
        <SubItemWrapper key={`sub-item-${i}`} variant="outlined">
          <FormText reviewMetaObj={reviewPairs && reviewPairs[i] ? reviewPairs[i] : null}>
            {initializeFormValues(arrayInputs, formState)}
          </FormText>
        </SubItemWrapper>
      ))}
    </Wrapper>
  )
}
