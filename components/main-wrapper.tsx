import * as React from "react"
import styled from "styled-components"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { blue, teal } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: blue,
  },
  // status: {
  //   danger: red,
  // },
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
`

let Main = styled.div`
  position: relative;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`

Main = styled(Main)`
  width: 100%;
`

type TProps = {
  children: React.ReactNode
}

export const MainWrapper = (props: TProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Main>
          {props.children}
        </Main>
      </Wrapper>
    </ThemeProvider>
  )
}
