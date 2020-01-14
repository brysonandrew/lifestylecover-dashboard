import * as React from "react"
import styled from "styled-components"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { color } from "../data"
import { sizes } from "../utils"
import {lightGreen, green, red, lime, teal, cyan} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: cyan,
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
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: ${color.black};
  background-color: ${color.black};
`

let Main = styled.div`
  position: relative;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`

Main = styled(Main)`
  width: 100%;
  /* ${sizes.laptop`
    width: 1200px;
 `} */
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
