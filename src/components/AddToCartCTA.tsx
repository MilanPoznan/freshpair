import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export const CtaButton = styled.div`
  width: 100%;
  margin: 20px auto;
  height: 50px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
    color: #fff;
    border-color: transparent;
    font-family: OpenSans-Regular,Arial,sans-serif;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    transition: all .3s ease,margin-top 0s ease;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #000;
    border: 2px solid transparent;
    border-color: #000;

  }
`
type Props = {
  name: string
  id: number
  size: string
}

export default function AddToCartCTA({ name, id, size }: Props) {

  const storeSessionStorage = sessionStorage.getItem("store")

  const [isItemInCart, setIsItemInCart] = useState(false)
  const item = {
    name,
    id,
    size
  }

  const checkIsItemInStorage = () => {
    if (storeSessionStorage) {
      let getItemsArr = JSON.parse(storeSessionStorage)
      return getItemsArr.map(() => item.id === id)
    }
  }

  function addToSessionStorage() {
    console.log(storeSessionStorage?.length)
    if (storeSessionStorage === null || storeSessionStorage.length === 0) {
      console.log('if')
      const storeArr = []
      storeArr.push(item)

      sessionStorage.setItem('store', JSON.stringify(storeArr))
      console.log(sessionStorage)
    } else {

      let getItemsArr = JSON.parse(storeSessionStorage)
      console.log('getItemsArr', getItemsArr)

      Object.values(getItemsArr).map((singleItem: any) => {

        if (singleItem.name === name) {
          alert('Product alrready exist')
          return
        } else {
          getItemsArr.push(item)
          sessionStorage.setItem('store', JSON.stringify(getItemsArr))
        }
      })
    }

    // setIsItemInCart(checkIsItemInStorage())

  }

  useEffect(() => {

    // setSsItemInCart()
    // setIsItemInCart(checkIsItemInStorage())

  }, [isItemInCart])



  return (

    <CtaButton onClick={addToSessionStorage}>{isItemInCart ? "Item in Cart" : "Add To Cart"}</CtaButton>

  )
}