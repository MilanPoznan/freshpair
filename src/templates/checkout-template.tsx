import React, { useState } from 'react'
import Layout from '../components/Layout'
import CheckoutForm from '../components/CheckoutForm'
import { CheckoutWrapper } from '../components/CheckoutForm.styled'

import CheckoutItems from '../components/CheckoutItems'
import { graphql } from 'gatsby'

type Props = {
  data: any
}



export default function Checkout({ data }: Props) {


  const { allWpMenu: { menus } } = data
  return (
    <Layout menus={menus[0]}>
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
