import React from 'react'
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

export default function CartItems({ }: Props) {

  const storeSessionStorage = sessionStorage.getItem("store")

  if (storeSessionStorage) {
    let getItemsArr = JSON.parse(storeSessionStorage)
    console.log(getItemsArr)
  }

  return (
    <CartItemsBox>
      <p>items:</p>
      <ItemsBox>
        {storeSessionStorage && JSON.parse(storeSessionStorage).map((item: any) => <p>{item.name}</p>)}
      </ItemsBox>
      <Link to="/checkout">checkout </Link>

    </CartItemsBox>
  )
}