import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { color, layoutSizes } from "../../data"
import { NavItem } from "./nav-item"
import { ListDivider } from "../../common/list-divider"
import { sizes } from "../../utils-viewport"

const Wrapper = styled(motion.ul)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: relative;
  bottom: 0;
  height: ${layoutSizes.nav.row}px;
  width: 100%;
  background-color: ${color.cyan};
  border-right: none;
  overflow: hidden;
  ${sizes.mobileLg`
    flex-direction: column;
    justify-content: flex-start;
    top: 0;
    height: calc(100% - ${layoutSizes.nav.row}px);
    border-right: 1px solid ${color.cyan};
  `}
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
