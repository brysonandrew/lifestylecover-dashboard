import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { color, TRANSITION_LINEAR_CONFIG, layoutSizes } from "../../data"
import { NavToggle } from "./nav-toggle"
import { NavItem } from "./nav-item"

const Wrapper = styled(motion.nav)`
  position: absolute;
  left: 0;
  top: 0;
  width: ${layoutSizes.nav.row}px;
  color: ${color.white};
  height: 100%;
`

const List = styled(motion.ul)`
  position: relative;
  top: 0;
  height: calc(100% - ${layoutSizes.nav.row}px);
  background-color: ${color.cyan};
  border-right: 1px solid ${color.cyan};
  overflow: hidden;
`

type TProps = {
  isOpen: boolean
  activeMenuItem: string
  onSetOpen(isOpen: boolean): void
  children: string[]
}

export const Nav = (props: TProps) => {
  const { isOpen, activeMenuItem, children, onSetOpen } = props
  return (
    <Wrapper
      animate={{ width: isOpen ? layoutSizes.nav.width : layoutSizes.nav.row }}
      transition={TRANSITION_LINEAR_CONFIG}
    >
      <NavToggle
        isOpen={isOpen}
        onSetOpen={onSetOpen}
      />
      <List>
        {children.map((item: string) => (
          <NavItem
            key={item}
            item={item}
            activeMenuItem={activeMenuItem}
            onSetOpen={onSetOpen}
          />
        ))}
      </List>
    </Wrapper>
  )
}
