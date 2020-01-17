import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { color, layoutSizes, GRADIENT } from "../../data"
import { Fab } from "@material-ui/core"

const Wrapper = styled.div`
  padding: 6px;
  height: ${layoutSizes.nav.row}px;
`

const FabStyled = styled(Fab)`
  && {
    color: ${color.white};
    background-image: ${GRADIENT};
  }
`

type TProps = {
  isOpen: boolean
  onSetOpen(isOpen: boolean): void
}

export const NavToggle = (props: TProps) => {
  const { isOpen, onSetOpen } = props
  return (
    <Wrapper>
      <FabStyled onClick={() => onSetOpen(!isOpen)}>
        <svg
          width={layoutSizes.nav.toggleIcon}
          height={layoutSizes.nav.toggleIcon}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <motion.path
            initial={false}
            animate={{
              d: `
            M3,4H7V8H3V4M9,
            ${isOpen ? "7V7H21V7H9M3" : "5V7H21V5H9M3"},
            10H7V14H3V10M9,
            ${isOpen ? "13V13H21V13H9M3" : "11V13H21V11H9M3"},
            16H7V20H3V16M9,
            ${isOpen ? "19V19H21V19H9" : "17V19H21V17H9"}`,
            }}
          />
        </svg>
      </FabStyled>
    </Wrapper>
  )
}
