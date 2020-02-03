import * as React from "react"
import styled from "styled-components"
import { IActionControlConfig, EUserRole } from "../../../models"
import { layoutSizes, color } from "../../../data"
import { Fab, Chip } from "@material-ui/core"
import { CheckCircle, Info } from "@material-ui/icons"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${color.offWhite};
  padding: 12px;
  width: 100%;
`

const ButtonWrapper = styled.div`
  height: ${layoutSizes.content.button.height}px;
  width: ${layoutSizes.content.button.width}px;
  margin-right: 12px;
  &:last-child {
    margin-right: 0;
  }
`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

const ChipWrapper = styled.div`
  && svg {
    fill: ${color.green};
    background-color: transparent;
  }
`

type TProps = {
  isReviewMeta?: boolean
  userRole?: EUserRole
  children: IActionControlConfig[]
}

export const ItemControls = ({ isReviewMeta, userRole, children }: TProps) => {
  const isClient = userRole === EUserRole.client
  return (
    <Wrapper style={{ justifyContent: isReviewMeta ? 'space-between' : 'flex-end' }}>
      {isReviewMeta
        && (
          <ChipWrapper>
            <Chip
              variant="outlined"
              size="medium"
              color="secondary"
              avatar={(
                isClient ? <CheckCircle /> : <Info />
              )}
              label={isClient ? 'PENDING REVIEW' : 'REVIEW REQUIRED'}
            />
          </ChipWrapper>
        )}
      <Buttons>
        {children.map((control: IActionControlConfig) => (
          <ButtonWrapper key={control.action}>
            <Fab
              size="small"
              onClick={control.callback}
            >
              {control.icon}
            </Fab>
          </ButtonWrapper>
        ))}
      </Buttons>
    </Wrapper>
  )
}
