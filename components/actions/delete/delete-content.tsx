import * as React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  text-align: center;
`
type TProps = {
  children: string
}

export const DeleteContent = (props: TProps) => {
  return (
    <Wrapper>
      <h2>{`Are you sure you want to delete ${props.children}?`}</h2>
    </Wrapper>
  )
}
