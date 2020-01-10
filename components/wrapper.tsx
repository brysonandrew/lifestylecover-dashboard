import * as React from "react"
import styled from "styled-components"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { COLOR_1, COLOR_2, COLOR_3 } from "../data"
import { sizes } from "../utils"

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
})

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLOR_1};
  background-color: ${COLOR_2};
  background-image: linear-gradient(to left, ${COLOR_3}, ${COLOR_2});
  padding-bottom: 100px;
  min-height: 100vh;
`

const Title = styled.h2`
  font-size: 40px;
  text-transform: capitalize;
`

let Main = styled.div`
  position: relative;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  padding: 12px;
`

Main = styled(Main)`
  text-align: center;
 ${sizes.tablet`
    width: 750px;
 `}
  ${sizes.laptop`
    width: 970px;
 `}
  ${sizes.desktop`
    width: 1170px;
 `}
`

type TProps = {
  title: string,
  children: React.ReactNode
}

export const MainWrapper = (props: TProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Main>
          <Title>{props.title}</Title>
          {props.children}
        </Main>
      </Wrapper>
    </ThemeProvider>
  )
}
