import React, { useContext, useState, useEffect } from 'react'
import { Link } from "gatsby"

import NavMenu from './NavMenu'
import Logo from './Logo'
import CartItems from './CartItems'
import { ShopContext } from './Layout'
// hooks
import { useCurrentWidth } from '../hooks/useResize'

// @ts-ignore: Unreachable code error
import CartImage from '../images/carticon.png';
//Reducer
import useShop from "./ShopContext";
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
  childItems: {
    nodes: MenuItemsProps[]
  }
  databaseId: number;
  label: string;
  order?: number;
  parentDatabaseId: number;
  parentId: string | null;
  path: string;
  cssClasses: string[];
}

export type MenuProps = {
  locations: string[];
  name: string;
  slug: string;
  menuItems: {
    nodes: MenuItemsProps[]
  };
}

interface Props {
  menuItems: MenuProps[];
}

export default function Header({ menuItems }: Props) {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isCartMenuOpen, setIsCartMenuOpen] = useState<boolean>(false)

  const shop = useContext(ShopContext);


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

      <CTAWrapper>
        <CartHeaderWrapper>
        </CartHeaderWrapper>
        <CartHeaderWrapper onClick={() => setIsCartMenuOpen(isCartMenuOpen => !isCartMenuOpen)} >
          <img src={CartImage} />
        </CartHeaderWrapper>
        <HamburgerButton onClick={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)} isMenuOpen={isMenuOpen}><span /></HamburgerButton>
      </CTAWrapper>

      <NavMenu isMenuOpen={isMenuOpen} menuLinks={menuItems} />
      {isCartMenuOpen && <CartItems />}
    </Wrapper>
  )
}