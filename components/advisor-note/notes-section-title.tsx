import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin-top: 24px;
`

const Title = styled.h4`
  padding-bottom: 12px;
`

type TProps = {
  title: string
  children: any
}

export const NotesSectionTitle = ({title, children}: TProps) => (
  <Wrapper>
    <Title>{title}</Title>
    {children}
  </Wrapper>
)
