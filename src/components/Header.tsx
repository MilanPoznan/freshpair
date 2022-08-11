import React, { useContext, useState, useEffect } from 'react'
import { Link } from "gatsby"

import NavMenu from './NavMenu'
import Logo from './Logo'
import CartItems from './CartItems'
// hooks
import { useCurrentWidth } from '../hooks/useResize'

// @ts-ignore: Unreachable code error
import CartImage from '../images/carticon.png';
//Reducer
// styles
import {
  Wrapper,
  HamburgerButton,
  LogoWrapper,
  CartHeaderWrapper,
  CTAWrapper
} from './Header.styled'

/***** Menu props *****/
export type MenuItemsProps = {
  databaseId: number;
  label: string;
  order?: number;
  parentDatabaseId: number;
  parentId: string | null;
  path: string;
  cssClasses: string[];
}

export type MenuProps = {
  name: string;
  slug: string;
  menuItems: {
    nodes: MenuItemsProps[]
  };
}

export default function Header({ menuItems }: any) {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isCartMenuOpen, setIsCartMenuOpen] = useState<boolean>(false)

  const windowWidth = useCurrentWidth();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    }
    else {
      document.body.style.overflow = "scroll"
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (windowWidth && windowWidth >= 1180 && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [windowWidth])


  return (
    <Wrapper>
      <LogoWrapper>
        <Link to="/">
          <Logo />
        </Link>
      </LogoWrapper>

      <NavMenu isMenuOpen={isMenuOpen} menuLinks={menuItems} />

      <CTAWrapper>
        <CartHeaderWrapper>
        </CartHeaderWrapper>
        <CartHeaderWrapper onClick={() => setIsCartMenuOpen(isCartMenuOpen => !isCartMenuOpen)} >
          <img src={CartImage} />
        </CartHeaderWrapper>
        <HamburgerButton onClick={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)} isMenuOpen={isMenuOpen}><span /></HamburgerButton>
      </CTAWrapper>

      {isCartMenuOpen && <CartItems />}
    </Wrapper>
  )
}