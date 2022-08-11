import React from 'react'

import { NavMenuWrapper, InstaIconLink, InstaIcon, LinkWrapper } from './NavMenu.styled'

import { MenuItemsProps } from './Header'
import { Link } from 'gatsby'

//@ts-ignore
import instaUrl from '../images/instagram-iconf.png';
type Props = {
  isMenuOpen: boolean
  menuLinks: MenuItemsProps[]
}


export default function NavMenu({ isMenuOpen, menuLinks }: Props) {

  return (
    <NavMenuWrapper isMenuOpen={isMenuOpen}>

      <LinkWrapper>
        {menuLinks && menuLinks.map(item =>
          <Link to={item.path}>{item.label}</Link>)}

      </LinkWrapper>

      <InstaIconLink href="https://www.instagram.com/freshpair_store/?hl=en" target="__blank">
        <InstaIcon src={instaUrl} />

      </InstaIconLink>
    </NavMenuWrapper>

  )

}