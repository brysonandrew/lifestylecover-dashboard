import * as React from "react"
import styled from "styled-components"
import { layoutSizes } from "../data"
import { PaperWrapper } from "./paper-wrapper"

const Wrapper = styled.div`
  width: 100%;
  margin: ${layoutSizes.nav.row}px auto;
`

const Title = styled.h2`
  font-size: 28px;
`

type TProps = {
  title: string;
  children: React.ReactNode
}

export const PageWrapper = (props: TProps) => {
  return (
    <Wrapper>
      <Title>
        {props.title}
      </Title>
      <PaperWrapper>
        {props.children}
      </PaperWrapper>
    </Wrapper>
  )
}
