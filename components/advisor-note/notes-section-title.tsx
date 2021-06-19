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
  isMain?: boolean
}

export const NotesSectionTitle = ({title, children, isMain}: TProps) => (
  <Wrapper>
    <Title style={{fontWeight: isMain ? 'bold' : 'normal'}}>{title}</Title>
    {children}
  </Wrapper>
)
