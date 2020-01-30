import * as React from "react"
import styled from "styled-components"
import { color } from "../../data"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${color.offBlack};
`

const Icon = styled.div`
  margin-right: 24px;
  & svg {
    display: block
  }
`

const Title = styled.h2`
  font-size: 22px;
`

type TProps = {
  icon?: React.ReactNode
  children: React.ReactNode
}

export const PageWrapperTitle = (props: TProps) => {
  const { icon, children } = props
  return (
    <Wrapper>
      {icon && (
        <Icon>
          {icon}
        </Icon>
      )}
      <Title>
        {children}
      </Title>
    </Wrapper>
  )
}
