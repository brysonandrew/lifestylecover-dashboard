import * as React from "react"
import styled from "styled-components"
import { fromKebabCase, fromCamelCase } from "../../utils"

const Wrapper = styled.div`
  margin-top: 12px;
  min-height: 50px;
  &:first-child {
    margin-top: 0;
  }
`

const Label = styled.div`
  font-size: 14px;
  text-transform: capitalize;
`

const Text = styled.div`
  width: 100%;
  position: relative;
  font-size: 18px;
  padding: 6px 0 8px;
`

type TProps = {
  label?: string
  children: React.ReactNode
}

export const TextFieldText: React.FC<TProps> = ({
  label,
  children,
}) => {
  return (
    <Wrapper>
      {label && <Label>{label === 'title' ? 'Reference Number' : fromCamelCase(label)}</Label>}
      <Text>
        {children}
      </Text>
    </Wrapper>
  )
}
