import * as React from "react"
import styled from "styled-components"
import { fromCamelCase, defined } from "../../utils"
import { color } from "../../data"
import { TextFieldTextLabel } from "./text-field-text-label"
import { Tooltip } from "@material-ui/core"

const Wrapper = styled.div`
  position: relative;
  margin-top: 12px;
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

const BackgroundShade = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${color.green};
  opacity: 0.2;
`

type TProps = {
  label?: string
  reviewValue?: string
  children: React.ReactNode
}

export const TextFieldText: React.FC<TProps> = ({
  label,
  children,
  reviewValue
}) => {
  return (
    <Wrapper style={{minHeight: label ? 50 : 0}}>
      <TextFieldTextLabel>
        {label}
      </TextFieldTextLabel>
      <Text>
        {reviewValue || children}
      </Text>
      {defined(reviewValue) && (
        <Tooltip title={`Currently "${children}"`} placement="bottom-start">
          <BackgroundShade/>
        </Tooltip>
      )}
    </Wrapper>
  )
}
