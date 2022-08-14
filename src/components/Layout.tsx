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
}

export const Main = styled.main`
display: flex;
flex-flow: column;
`


export default function Layout({ children, menus }: LayoutProps) {

  const { menuItems: { nodes } } = menus

  return (
    <ThemeProvider theme={theme}>
      <Seo meta={[]} description='aaaa' title='aaaaaaaa' pageTitle="PTitle" />
      <Main>
        <Header menuItems={nodes} />
        {children}
        <Footer />
      </Main>
    </ThemeProvider>



  )
}