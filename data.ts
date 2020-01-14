import {teal, blue, green, lightGreen, red, cyan, blueGrey} from '@material-ui/core/colors';
console.log(teal)
export const color = {
  cyan: cyan[900],
  teal: teal['A400'],
  green: green['A400'],
  darkGreen: blueGrey[900],
  offWhite: "#FAFAFA",
  lightGrey: "#E0E0E0",
  white: "#FFF",
  lightCyan: teal[50],
  grey: "#9E9E9E",
  black: "#1d2432",
  offBlack: "#424242",
  red: red[800],
}
export const GRADIENT = `linear-gradient(45deg, ${color.teal}, ${color.green})`
export const TRANSITION_LINEAR_CONFIG = { ease: "linear", duration: 0.2 }
export const ROOT_URL = "https://dashboard.lifestyleportal.thedevguys.co.nz"
export const GRAPHQL_URL = 'https://dashboard.lifestyleportal.thedevguys.co.nz/graphql';

export const layoutSizes = {
  nav: {
    row: 68,
    width: 220,
    icon: 28,
    toggle: 80,
    toggleIcon: 40
  },
  content: {
    button: {
      height: 48,
      width: 48
    }
  }
}

export const AUTH_TOKEN_KEY = "AUTH_TOKEN"
