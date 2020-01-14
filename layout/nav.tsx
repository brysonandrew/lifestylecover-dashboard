import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { color, TRANSITION_LINEAR_CONFIG } from "../data"
import { ICONS } from "./menu-items"
import { LINE_S, NAV_MAX, ICON_S } from "./data"
import { toKebabCase } from "../utils"
import Link from 'next/link'

const Wrapper = styled(motion.nav)`
  position: absolute;
  left: 0;
  top: 0;
  width: ${LINE_S}px;
  background-color: ${color.darkGreen};
  height: 100%;
  color: ${color.offWhite};
`

const Toggle = styled.div`
  height: ${LINE_S}px;
`

const List = styled(motion.ul)`
  height: 100%;
  background-color: ${color.darkGreen};
  overflow: hidden;
`

const Item = styled.li`
  position: relative;
  height: ${LINE_S}px;
  width: ${NAV_MAX}px;
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
  height: ${LINE_S}px;
  width: ${LINE_S}px;
  & svg {
    height: ${ICON_S}px;
    width: ${ICON_S}px;
    fill: ${color.offWhite};
  }
`

const ItemText = styled.div`
  padding-left: 12px;
  font-size: ${ICON_S * 0.8}px;
  width: ${NAV_MAX - LINE_S}px;
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
      animate={{ width: isOpen ? NAV_MAX : LINE_S }}
      transition={TRANSITION_LINEAR_CONFIG}
    >
      <Toggle>
        <Button
          whileHover={{backgroundColor: `rgba(255,255,255,0.1)`}}
          onClick={() => onSetOpen(!isOpen)}
        >
          <svg width={ICON_S} height={ICON_S} viewBox="0 0 24 24" fill="currentColor">
            <motion.path
              initial={false}
              animate={{
                d: `
                M3,4H7V8H3V4M9,
                ${isOpen ? '7V7H21V7H9M3' : '5V7H21V5H9M3'},
                10H7V14H3V10M9,
                ${isOpen ? '13V13H21V13H9M3' : '11V13H21V11H9M3'},
                16H7V20H3V16M9,
                ${isOpen ? '19V19H21V19H9' : '17V19H21V17H9'}`,
              }}
            />
          </svg>
        </Button>
      </Toggle>
      <List>
        {children.map((item: string) => (
          <Item key={item}>
            <Link
              href={`/?activeMenuItem=${toKebabCase(item)}`}
              as={`/${toKebabCase(item)}/`}
            >
              <ItemLink
                whileHover={{backgroundColor: `rgba(255,255,255,0.1)`}}
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
          </Item>
        ))}
      </List>
    </Wrapper>
  )
}
