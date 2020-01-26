import * as React from "react"
import styled from "styled-components"
import { FormDisabled } from "../form-disabled"

const Wrapper = styled.div`
`

type TProps = {
  children: any[]
}

export const ArrayDisabled = (props: TProps) => (
  <Wrapper>
    {props.children.map((formState) => (
      <FormDisabled>
        {formState}
      </FormDisabled>
    ))}
  </Wrapper>
)
