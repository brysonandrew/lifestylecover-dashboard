import * as React from "react"
import styled from "styled-components"
import { IUserActionControlConfig } from "../../models/users"
import { layoutSizes } from "../../data"
import { ButtonSquare } from "../../common/buttons/button-square"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${layoutSizes.content.button.width}px;
`

const ButtonWrapper = styled.div`
  height: ${layoutSizes.content.button.height}px;
  width: ${layoutSizes.content.button.width}px;
`

type TProps = {
  children: IUserActionControlConfig[]
}

export const UserItemControls = (props: TProps) => {
  return (
    <Wrapper>
      {props.children.map((control: IUserActionControlConfig) => (
        <ButtonWrapper key={control.action}>
          <ButtonSquare onClick={control.callback}>
            {control.icon}
          </ButtonSquare>
        </ButtonWrapper>
      ))}
    </Wrapper>
  )
}
