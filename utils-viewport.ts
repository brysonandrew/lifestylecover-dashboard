import { css } from "styled-components"

export const VIEWPORT_SIZES = {
  mobileSm: 320,
  mobileMd: 375,
  mobileLg: 450,
  tablet: 768,
  tabletLg: 992,
  laptop: 1200,
  laptopLg: 1500,
  desktop: 1720,
  desktopLg: 1920,
}

export const sizes: any = Object.keys(VIEWPORT_SIZES).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${VIEWPORT_SIZES[label]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})

function preventDefault(e) {
  e = e || window.event
  if (e.preventDefault) e.preventDefault()
  e.returnValue = false
}

let scrollY = 0

export const toggleNoScroll = (isNoScroll: boolean, element) => {
  if (isNoScroll) {
    element.addEventListener("wheel", preventDefault, { passive: false })
    element.addEventListener("touchmove", preventDefault, { passive: false })
    scrollY = window.scrollY
    element.style.top = `-${scrollY}px`
    document.documentElement.className = "no-scroll"
  } else {
    element.removeEventListener("wheel", preventDefault)
    element.removeEventListener("touchmove", preventDefault)
    document.documentElement.className = ""
    element.style.top = `0px`
    window.scrollBy(0, scrollY)
  }
}
