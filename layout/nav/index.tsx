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
  background-color: ${color.darkGreen};
  height: 100%;
  color: ${color.offWhite};
`

const Toggle = styled.div`
  padding: 6px;
  height: ${layoutSizes.nav.row}px;
`

const List = styled(motion.ul)`
  height: 100%;
  background-color: ${color.darkGreen};
  overflow: hidden;
`

const Item = styled.li`
  position: relative;
  height: ${layoutSizes.nav.row}px;
  width: ${layoutSizes.nav.width}px;
`

const Button = styled(motion.button)`
  position: relative;
  width: 100%;
  height: 100%;
`

const ItemLink = styled(motion.a)`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`

const ItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${layoutSizes.nav.row}px;
  width: ${layoutSizes.nav.row}px;
  & svg {
    height: ${layoutSizes.nav.icon}px;
    width: ${layoutSizes.nav.icon}px;
    fill: ${color.offWhite};
  }
`

const ItemText = styled.div`
  padding-left: 12px;
  font-size: ${layoutSizes.nav.icon * 0.8}px;
  width: ${layoutSizes.nav.width - layoutSizes.nav.row}px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
