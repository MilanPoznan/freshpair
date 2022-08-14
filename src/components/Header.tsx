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
  CTAWrapper,
  CartItemCounter
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



  // CART ITEM SECTIONS
  const [activeItems, setActiveItems] = useState([])

  const storeSessionStorage = sessionStorage.getItem("store")
  let storeSessionStorageArr = storeSessionStorage && JSON.parse(storeSessionStorage)

  const removeFromSessionStorage = (name: string) => {
    return storeSessionStorageArr.filter((item: any) => item.name !== name)
  }

  const setNewSessionStorage = (name: string) => {

    const cart = removeFromSessionStorage(name)
    if (cart.length === 0) {
      sessionStorage.clear();
    } else {
      sessionStorage.setItem('store', JSON.stringify(cart))
    }
  }

  const removeItemsFromState = (name: string) => {
    setActiveItems(removeFromSessionStorage(name))
  }

  useEffect(() => {
    storeSessionStorage && setActiveItems(JSON.parse(storeSessionStorage))
  }, [])



  return (
    <Wrapper>
      <LogoWrapper>

        <Link to="/">
          <Logo />
        </Link>
      </LogoWrapper>

      <NavMenu isMenuOpen={isMenuOpen} menuLinks={menuItems} />

      <CTAWrapper>
        {activeItems.length !== 0 && <CartItemCounter>{activeItems.length}</CartItemCounter>}
        <CartHeaderWrapper onClick={() => setIsCartMenuOpen(isCartMenuOpen => !isCartMenuOpen)} >
          <img src={CartImage} />
        </CartHeaderWrapper>
        <HamburgerButton onClick={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)} isMenuOpen={isMenuOpen}><span /></HamburgerButton>
      </CTAWrapper>

      {isCartMenuOpen
        && <CartItems
          activeItems={activeItems}
          setNewSessionStorage={setNewSessionStorage}
          removeItemsFromState={removeItemsFromState}
          storeSessionStorage={storeSessionStorage}
        />}
    </Wrapper>
  )
}