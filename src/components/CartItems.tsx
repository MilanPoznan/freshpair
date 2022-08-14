import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
type Props = {}

export const CartItemsBox = styled.div`

  position: absolute;
  padding: 14px;
  top: 70px;
  right: 10%;
  background-color: ${({ theme }) => theme.colors.primaryShade};

`

export const GoToCheckoutCTA = styled.button``

export const ItemsBox = styled.div`
  display: flex;
  flex-flow: column;
`

export const CheckoutItemWrapper = styled.div`
  display: flex;
`
export const CloseIcon = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;
  &:before, &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 3px;
    background-color: red;
    border-radius: 4px;
    top: 5px;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`

export default function CartItems({ }: Props) {

  const [activeItems, setActiveItems] = useState([])

  const storeSessionStorage = sessionStorage.getItem("store")
  let storeSessionStorageArr = storeSessionStorage && JSON.parse(storeSessionStorage)

  const removeFromSessionStorage = (name: string) =>
    storeSessionStorageArr.filter((item: any) => item.name !== name)

  const setNewSessionStorage = (name: string) => {

    const cart = removeFromSessionStorage(name)
    if (cart.length === 0) {
      sessionStorage.clear();
    } else {
      sessionStorage.setItem('store', JSON.stringify(cart))
    }
  }

  const removeItemsFromState = (name: string) =>
    setActiveItems(removeFromSessionStorage(name))

  useEffect(() => {
    storeSessionStorage && setActiveItems(JSON.parse(storeSessionStorage))
    console.log('storeSessionStorageArr', storeSessionStorageArr)
  }, [])


  return (
    <CartItemsBox>
      <p>items:</p>
      <ItemsBox>
        {activeItems && activeItems.map((item: any) =>
          <CheckoutItemWrapper key={item.id}>
            <p>{item.name}</p>
            <p>{item.id}</p>
            <CloseIcon onClick={() => {
              setNewSessionStorage(item.name)
              removeItemsFromState(item.name)
            }} />
          </CheckoutItemWrapper>
        )}
      </ItemsBox>
      <Link to="/checkout">checkout </Link>

    </CartItemsBox>
  )
}