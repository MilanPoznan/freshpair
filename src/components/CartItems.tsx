import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { device } from "../global-styles/mediaQueries";
type SingleCartItem = {
  name: string,
  id: string,
  size: string
}




export const CartItemsBox = styled.div`
  position: absolute;
  padding: 14px;
  width: 220px;
  top: 70px;
  right: 10%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  /* border: 1px solid ${({ theme }) => theme.colors.blackOpacity40}; */
  box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.72);
  font-weight: bold;
  a {
    margin-top: 20px;
    background-color: ${({ theme }) => theme.colors.black};
    padding: 8px 12px;
    color: white;
    float: right;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 12px;
    border-radius: 3px;
  }

  @media ${device.tablet} {
    right: 30px;
  }
  @media ${device.desktop} {
    right: 55px;
  }

`

export const GoToCheckoutCTA = styled.button``

export const ItemsBox = styled.div`
  display: flex;
  flex-flow: column;
`

export const CheckoutItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  p {
    margin-bottom: 4px;
  }
  margin-bottom: 8px;
`
export const CloseIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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
    top: 13px;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`

interface Props {
  activeItems: SingleCartItem[]
  setNewSessionStorage: (name: string) => void
  removeItemsFromState: (name: string) => void
  storeSessionStorage: string | null
  // setActiveItems: React.Dispatch<React.SetStateAction<any[]>>
}



export default function CartItems({ activeItems, setNewSessionStorage, removeItemsFromState, storeSessionStorage }: Props) {

  return (
    <CartItemsBox>
      <p>Items in Cart :</p>
      <ItemsBox>
        {activeItems && activeItems.map((item: any) =>
          <CheckoutItemWrapper key={item.id}>
            <p>{item.name}</p>
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