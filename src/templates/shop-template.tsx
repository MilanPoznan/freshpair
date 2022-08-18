import React from 'react'
import { graphql } from 'gatsby'

import MainShop from '../components/MainShop'

import Layout from '../components/Layout'

import { GatsbyImageInterface, GatsbyImageInterface2 } from '../globalInterface'

type SingleCatSnikItem = {
  link: string
  name: string
}
export interface SneakersData {
  id: number
  link: string
  slug: string
  title: string
  uri: string
  featuredImageId: number
  featuredImageDatabaseId: number
  featuredImage: GatsbyImageInterface2
  categories: {
    nodes: {
      link: string
      name: string
    }[]
  }
  mycattegories: | string[]
  parrentCategory: string | null
}



export default function Shop({ data, location }: any) {

  const { allWpMenu: { menus }, allWpSneaker: { nodes }, allWpCategory } = data

  return (
    <Layout menus={menus[0]}>
      <MainShop shopData={nodes} allWpCategory={allWpCategory} activeLocationCategory={location.state?.activeCat} />
    </Layout>
  )
}



export const shopQuery = graphql`
  query shopPage($id: String) {
  allWpMenu {
    ...getMenus
  }
  wpPage(id: {eq: $id}) {
    title
    slug
    uri
  }
  allWpCategory {
    nodes {
      link
      databaseId
      name
      ancestors {
        nodes {
          id
          name
          uri
        }
      }
      slug
      sneaker {
        nodes {
          title
          link
          slug
          id
          featuredImage {
            node {
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
    }
  }




  allWpSneaker {
    nodes {
      id
      link
      slug
      title
      uri
      featuredImageId
      featuredImageDatabaseId
      featuredImage {
        node {
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
      categories {
        nodes {
          link
          name
        }
      }
    }
  }
}` 
