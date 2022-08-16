import React from 'react'
import { WYSIWYGWrapper, ContentWrapper, Heading2 } from '../global-styles/globalComponents'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { device } from '../global-styles/mediaQueries'


export const ContentWrapper2 = styled.div`
width: 100%;
padding: 0px 30px 0px 30px;
  @media ${device.tablet} {
    padding: 0px 50px 0px 50px;
  }
  @media ${device.tabletL} {
    padding: 0px 80px 0px 80px;
  }
  @media ${device.desktopS} {
    max-width: 860px;
    margin: 0 auto;
    padding: 0;
  }
`
export const ImageWrapper = styled.div`
  margin-bottom: 20px;
  .gatsby-image-wrapper {
    border-radius: 10px;
    max-height: 250px;
    img {
      border-radius: 10px;
      height: 100%;
      object-fit: contain;
    }
  }
  @media ${device.tablet} {
    .gatsby-image-wrapper {
      border-radius: 12px;
      max-height: 40vh;
    }
  }
`

type Props = {
  data: any
}

export default function singlePostTemplate({ data }: Props) {

  console.log(data)
  const { wpPost: { title, slug, content, featuredImage }, allWpMenu: { menus } } = data

  return (
    <Layout menus={menus[0]}>
      <ContentWrapper2>

        <div style={{ paddingTop: '120px' }}></div>
        <ImageWrapper>
          <GatsbyImage image={featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={title} />
        </ImageWrapper>
        <Heading2>{title}</Heading2>
        <div style={{ paddingTop: '40px' }}></div>

        <WYSIWYGWrapper dangerouslySetInnerHTML={{ __html: content }}></WYSIWYGWrapper>
        <div style={{ paddingTop: '80px' }}></div>

      </ContentWrapper2>
    </Layout>
  )
}



export const pageQuery = graphql`
  query contentPostByID($id: String) {
  allWpMenu {
    ...getMenus
  }
  wpPost (id: {eq: $id}) {
    title
    slug
    uri
    content
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
}` 