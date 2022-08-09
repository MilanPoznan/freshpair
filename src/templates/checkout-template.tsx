import React, { useState } from 'react'
import Layout from '../components/Layout'
import CheckoutForm from '../components/CheckoutForm'

import { graphql } from 'gatsby'

type Props = {
  data: any
}



export default function Checkout({ data }: Props) {

  const { allWpMenu: { menus } } = data

  return (
    <Layout menus={menus[0]}>
      <CheckoutForm />
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
