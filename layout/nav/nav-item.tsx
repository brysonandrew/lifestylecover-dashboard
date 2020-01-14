import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { color, layoutSizes } from "../../data"
import { ICONS } from "../menu-items"
import { toKebabCase } from "../../utils"
import Link from 'next/link'

const Wrapper = styled.li`
  position: relative;
  height: ${layoutSizes.nav.row}px;
  width: ${layoutSizes.nav.width}px;
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
  item: string
  activeMenuItem: string
  onSetOpen(isOpen: boolean): void
}

export const NavItem = (props: TProps) => {
  const { item, activeMenuItem, onSetOpen } = props
  return (
    <Wrapper>
      <Link
        href={`/?activeMenuItem=${toKebabCase(item)}`}
        as={`/${toKebabCase(item)}/`}
      >
        <ItemLink
          whileHover={{ backgroundColor: `rgba(255,255,255,0.1)` }}
          style={{
            backgroundImage:
              toKebabCase(item) === activeMenuItem
                ? `linear-gradient(45deg, ${color.lightGreen}, ${color.highlightGreen})`
                : 'none'
          }}
          onClick={() => onSetOpen(false)}
        >
          <ItemIcon>
            {ICONS[item]}
          </ItemIcon>
          <ItemText>
            {item}
          </ItemText>
        </ItemLink>
      </Link>
    </Wrapper>
  )
}
