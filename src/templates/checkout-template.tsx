import React, { useState } from 'react'
import Layout from '../components/Layout'
import CheckoutForm from '../components/CheckoutForm'
import { CheckoutWrapper } from '../components/CheckoutForm.styled'

import CheckoutItems from '../components/CheckoutItems'
import { graphql } from 'gatsby'

type Props = {
  data: any
  path: string
}



export default function Checkout({ data, path }: Props) {


  const { allWpMenu: { menus } } = data
  return (
    <Layout menus={menus[0]} isCheckout={path === "/checkout/"}>
      <CheckoutWrapper>
        <CheckoutForm />
      </CheckoutWrapper>
    </Layout>
  )
}



export const checkoutQuery = graphql`
  query checkoutPage($id: String) {
  allWpMenu {
    ...getMenus
  }
  wpPage(id: {eq: $id}) {
    title
    slug
    uri
  }
}` 
