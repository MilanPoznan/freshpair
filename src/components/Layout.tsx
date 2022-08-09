import React, { useReducer } from 'react'
import Header, { MenuProps } from './Header'
import Footer from './Footer'
import { theme } from '../global-styles/globalTheme'
import { ThemeProvider } from 'styled-components'
// import { InitialState, initialState } from './shopReducer'
import { ShopProvider } from './ShopContext'
import '../global-styles/normalize.css'

//Reducer
import useShop from "./ShopContext";

type SingleProduct = {
  total: 0,
  products: []
}

interface InitialState {
  products: SingleProduct[] | []
  addItem?: (product: any) => void,
  removeItem?: (product: any) => void,

}


interface LayoutProps {
  children: any,
  menus: MenuProps[],
}



export const initialState: any = {
  products: [],
};

export const ShopContext = React.createContext(initialState);

const Provider = ({ children }: { children: any }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    shopState: state,
    addItem: (product: any) => {
      dispatch({ type: 'ADD_TO_CART', payload: product })
    },
    removeItem: (product: any) => {
      dispatch({ type: 'REMOVE_FROM_CART', payload: product })
    }

  }

}


export function reducer(state: InitialState, action: any) {
  const { type, payload } = action;
  console.log(payload)
  switch (type) {
    case "ADD_TO_CART":
      console.log("ADD_TO_CART", payload);
      return {
        ...state,
        products: payload.products
      };
    case "REMOVE_FROM_CART":
      console.log("REMOVE_FROM_CART", payload);
      return {
        ...state,
        products: payload.products
      };
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
}



export default function Layout({ children, menus }: LayoutProps) {

  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    products: state,
    addItem: (product: any) => {
      dispatch({ type: 'ADD_TO_CART', payload: product })
    },
    removeItem: (product: any) => {
      dispatch({ type: 'REMOVE_FROM_CART', payload: product })
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <ShopContext.Provider value={value} >
        <main>
          <Header menuItems={menus} />
          {children}
          <Footer />
        </main>
      </ShopContext.Provider>
    </ThemeProvider>



  )
}