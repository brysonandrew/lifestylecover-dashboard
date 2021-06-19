import * as React from "react"
import styled from "styled-components"
import { fromCamelCase } from "../../utils"

const Wrapper = styled.div`
  font-size: 14px;
  text-transform: capitalize;
`

type TProps = {
  children?: string
}

export const TextFieldTextLabel: React.FC<TProps> = ({
  children,
}) => {
  if (children) {
    return <Wrapper>{fromCamelCase(children)}</Wrapper>
  } else {
    return null
  }
}
