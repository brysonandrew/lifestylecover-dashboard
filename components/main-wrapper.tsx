import * as React from "react"
import styled from "styled-components"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { color } from "../data"
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
  color: ${color.black};
  background-color: ${color.offWhite};
`

let Main = styled.div`
  position: relative;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`

Main = styled(Main)`
  ${sizes.desktop`
    width: 1170px;
 `}
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
