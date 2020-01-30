import * as React from "react"
import styled from "styled-components"
import { layoutSizes } from "../../data"
import { PaperWrapper } from "../paper-wrapper"
import { PageWrapperTitle } from "./page-wrapper-title"

const Wrapper = styled.div`
  width: 100%;
  margin: ${layoutSizes.nav.row}px auto;
`

type TProps = {
  icon?: React.ReactNode
  title: React.ReactNode;
  children: React.ReactNode
}

export const PageWrapper = (props: TProps) => {
  const { icon, title, children } = props
  return (
    <Wrapper>
      <PageWrapperTitle icon={icon}>
        {title}
      </PageWrapperTitle>
      <PaperWrapper>
        {children}
      </PaperWrapper>
    </Wrapper>
  )
}

export * from './page-wrapper-title'
