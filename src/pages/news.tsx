import React from 'react'
import { WYSIWYGWrapper, ContentWrapper, Heading2 } from '../global-styles/globalComponents'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { BlogWrapper, SectionTitle, SinglePost } from '../components/LatestBlogSection'

type Props = {
  data: any
}

export default function news({ data }: Props) {
  const { allWpMenu: { menus }, allWpPost: { nodes } } = data

  console.log(data)
  return (
    <Layout menus={menus[0]} isCheckout={false}>
      <ContentWrapper>
        <SectionTitle>Blog</SectionTitle>
        <BlogWrapper>

          {nodes.map((item: any) => <SinglePost>
            <GatsbyImage alt="post image" image={item.featuredImage.node.localFile.childImageSharp.gatsbyImageData} />
            <Link to={item.slug}>{item.title}</Link>
            <p>{item.singleBlog.previewText}...</p>
          </SinglePost>)}

        </BlogWrapper>
      </ContentWrapper>
    </Layout>
  )
}




export const pageQuery = graphql`
  query archivePage {
  allWpMenu {
    ...getMenus
  }
  allWpPost {
      nodes {
        title
        slug
        content
        singleBlog {
          previewText
        }
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
}` 
