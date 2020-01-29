import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { color, layoutSizes } from "../../data"
import { NavItem } from "./nav-item"
import { ListDivider } from "../../common/list-divider"

const Wrapper = styled(motion.ul)`
  position: relative;
  top: 0;
  height: calc(100% - ${layoutSizes.nav.row}px);
  background-color: ${color.cyan};
  border-right: 1px solid ${color.cyan};
  overflow: hidden;
`

type TProps = {
  activeMenuItem: string
  onSetOpen(isOpen: boolean): void
  children: string[]
}

export const NavList = (props: TProps) => {
  const { activeMenuItem, children, onSetOpen } = props
  return (
    <Wrapper>
      {children.map((item: string, index: number) => (
        <React.Fragment key={item}>
          {index !== 0 && <ListDivider />}
          <NavItem
            item={item}
            activeMenuItem={activeMenuItem}
            onSetOpen={onSetOpen}
          />
        </React.Fragment>
      ))}
    </Wrapper>
  )
}
