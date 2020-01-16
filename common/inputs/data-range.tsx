import * as React from "react"
import styled from "styled-components"
import { TextField, Checkbox } from "../inputs"
import { TTextFieldProps } from "../../models/inputs"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Item = styled.div`
  position: relative;
  width: calc(50% - 6px);
`

const LabelWrapper = styled.div`
  margin-top: 12px;
`

const Text = styled.span`
  margin-right: 12px;
`

const Present = styled.div`
  height: 32px;
  margin-top: 29px;
  padding-top: 6px;
  font-size: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  color: rgba(0, 0, 0, 0.87);
`

type TDateRangeProps = {
  isPresent: boolean
  start: TTextFieldProps
  end: TTextFieldProps
}

export const DateRange = ({ start, end, isPresent }: TDateRangeProps) => (
  <Wrapper>
    <Item>
      <TextField {...start} />
    </Item>
    <Item>
      {isPresent ? <Present>present</Present> : <TextField {...end} />}
      <LabelWrapper>
        <label>
          <Text>Currently there</Text>
          <Checkbox {...end} value="present" />
        </label>
      </LabelWrapper>
    </Item>
  </Wrapper>
)
