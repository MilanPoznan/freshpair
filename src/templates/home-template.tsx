import React from 'react'
import { graphql } from 'gatsby'
import HeroSection from '../components/HeroSection'
import Layout from '../components/Layout'

import { MenuProps } from '../components/Header'

export default function HomePage({ data, location }: any) {
  // const { wpPage: { translations, language, title, slug, siteContent: { flexibleContent } }, allWp, allWpChef, allWpMenu: { menus } } = data

  console.log(data)

  const { allWpMenu: { menus }, wpPage: { homepage: { aboutUs, bestSellers, categoryGroup } } } = data

  console.log(categoryGroup)

  return (<Layout menus={menus[0]}>
    <HeroSection heroData={categoryGroup} />
    <div>homepage</div>


  </Layout>)
}



export const homepageQuery = graphql`
  query pageByID($id: String) {
  allWpMenu {
    ...getMenus
  }
  wpPage(id: {eq: $id}) {
    title
    slug
    uri
    homepage {
        bestSellers {
          bestSeller {
            ... on WpSneaker {
              id
              title
            }
          }
        }
        aboutUs
        categoryGroup {
          categoryImage {
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
          categoryLink
          categoryTitle1
          categoryLink2
          categoryTitle2
          categoryImage2 {
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
          categoryLink3
          categoryTitle3
          categoryImage3 {
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