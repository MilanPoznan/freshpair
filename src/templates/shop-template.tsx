import React from 'react'
import { graphql } from 'gatsby'

import MainShop from '../components/MainShop'

import Layout from '../components/Layout'

import { GatsbyImageInterface, GatsbyImageInterface2 } from '../globalInterface'

interface SingleCatSnikItem {
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
    nodes: SingleCatSnikItem[]
  }
  mycattegories: | string[]
}



export default function Shop({ data, location }: any) {
  // const { wpPage: { translations, language, title, slug, siteContent: { flexibleContent } }, allWp, allWpChef, allWpMenu: { menus } } = data

  const { allWpMenu: { menus }, allWpSneaker: { nodes }, allWpCategory } = data

  console.log(nodes)
  return (
    <Layout menus={menus[0]}>
      Shop template
      <MainShop shopData={nodes} allWpCategory={allWpCategory} />
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
