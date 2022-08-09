import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SneakerSlider from '../components/SneakerSlider'
import AddToCartCTA from '../components/AddToCartCTA'
type Props = {
  data: any
}

export default function Shoe({ data }: Props) {

  const { allWpMenu: { menus }, wpSneaker: { singleSneaker: galery, title, id }, } = data

  return (
    <Layout menus={menus[0]}>
      {/* <MainShoeWrapper> */}
      {galery && <SneakerSlider galery={galery}></SneakerSlider>}
      {/* </MainShoeWrapper> */}
      <h1>{title}</h1>
      <div>shoe-template</div>
      <AddToCartCTA name={title} id={id} />
    </Layout>
  )
}



export const singleShoeQuery = graphql`
  query shoePage($id: String) {
    allWpMenu {
    ...getMenus
  }
    wpSneaker(id: {eq: $id}) {
      id
      link
      slug
      title
      uri
      content
      singleSneaker {  
        galery {
          image {
            altText
            localFile {
                  childImageSharp {
                    gatsbyImageData(
                      layout: FULL_WIDTH
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
          }
        }
      }
    }
  }` 