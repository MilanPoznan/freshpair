import React from 'react'

import { NavMenuWrapper } from './NavMenu.styled'

import { MenuItemsProps } from './Header'

type Props = {
  isMenuOpen: boolean
  menuLinks: MenuItemsProps[]
}

export default function NavMenu({ isMenuOpen, menuLinks }: Props) {

  return (
    <NavMenuWrapper isMenuOpen={isMenuOpen}>
      NavMenu
    </NavMenuWrapper>

  )

}