import * as React from "react"
import styled from "styled-components"
import { IActionControlConfig } from "../../models"
import { layoutSizes } from "../../data"
import { Fab } from "@material-ui/core"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${layoutSizes.content.button.width}px;
`

const ButtonWrapper = styled.div`
  height: ${layoutSizes.content.button.height}px;
  width: ${layoutSizes.content.button.width}px;
  margin-top: 8px;
  &:first-child {
    margin-top: 0;
  }
`

type TProps = {
  children: IActionControlConfig[]
}

export const ItemControls = (props: TProps) => {
  return (
    <Wrapper>
      {props.children.map((control: IActionControlConfig) => (
        <ButtonWrapper key={control.action}>
          <Fab size="small" onClick={control.callback}>
            {control.icon}
          </Fab>
        </ButtonWrapper>
      ))}
    </Wrapper>
  )
}
