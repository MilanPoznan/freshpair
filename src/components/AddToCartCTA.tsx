import React, { useContext, useReducer } from 'react'
import { reducer, ShopContext, initialState } from './Layout'

type Props = {
  name: string
  id: number
}

export default function AddToCartCTA({ name, id }: Props) {

  function addToSessionStorage() {
    const item = {
      name,
      id
    }

    const storeSessionStorage = sessionStorage.getItem("store")

    if (storeSessionStorage === null) {
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



  }
  return (
    <div onClick={addToSessionStorage}>AddToCartCTA</div>
  )
}