import React, { useReducer } from 'react'
import Header, { MenuItemsProps, MenuProps } from './Header'
import Footer from './Footer'
import { theme } from '../global-styles/globalTheme'
import { ThemeProvider } from 'styled-components'
import '../global-styles/normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css';

interface LayoutProps {
  children: any,
  menus: MenuProps
}


export default function Layout({ children, menus }: LayoutProps) {

  const { menuItems: { nodes } } = menus
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Header menuItems={nodes} />
        {children}
        <Footer />
      </main>
    </ThemeProvider>



  )
}