import React, { useReducer } from 'react'
import Header, { MenuItemsProps, MenuProps } from './Header'
import Footer from './Footer'
import { theme } from '../global-styles/globalTheme'
import { ThemeProvider } from 'styled-components'

import styled from 'styled-components'
import '../global-styles/normalize.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Seo from './Seo'
interface LayoutProps {
  children: any,
  menus: MenuProps
  isCheckout?: boolean
}

export const Main = styled.main`
display: flex;
flex-flow: column;
`


export default function Layout({ children, menus, isCheckout }: LayoutProps) {

  const { menuItems: { nodes } } = menus

  return (
    <ThemeProvider theme={theme}>
      <Seo meta={[]} description='aaaa' title='Freshpair' pageTitle="Freshpair" />
      <Main>
        <Header menuItems={nodes} isCheckout={isCheckout} />
        {children}
        <Footer />
      </Main>
    </ThemeProvider>



  )
}