import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { ContentWrapper } from '../global-styles/globalComponents'
import { device } from '../global-styles/mediaQueries'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

export const BlogWrapper = styled.div`

  @media ${device.desktopS} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 100px;
  }
`
export const SectionTitle = styled.h2`
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;
  margin: 30px 0;
`

export const SinglePost = styled.div`
margin-bottom: 30px;
.gatsby-image-wrapper {
  border-radius: 10px;
  img {
    border-radius: 10px;
  }
}
a {
    font-size: 24px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    font-family: 'Nunito Sans', sans-serif;
    font-weight: bold;
    width: 100%;
    position: relative;
    display: flex;
    padding: 10px;
    transition: 0.3s;
    &:hover {
      color: ${({ theme }) => theme.colors.gold};
    }
  }
  p {
    padding-left: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.blackOpacity40};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.black60};
    padding-bottom: 10px;
  }

  @media ${device.desktopS} {
    width: 32%;
  }
`
type Props = {}

export default function LatestBlogSection({ }: Props) {
  const allPosts = useStaticQuery(graphql`{
    allWpPost {
      nodes {
			title
      slug
      uri
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
  }`)
  const { allWpPost: { nodes } } = allPosts

  const latest3Post = nodes.slice(-3)

  return (
    <ContentWrapper>
      <SectionTitle>Latest Blog Posts</SectionTitle>
      <BlogWrapper>

        {latest3Post.map((item: any) => <SinglePost>
          <GatsbyImage alt="post image" image={item.featuredImage.node.localFile.childImageSharp.gatsbyImageData} />
          <Link to={'news/' + item.slug}>{item.title}</Link>
          <p>{item.singleBlog.previewText}...</p>
        </SinglePost>)}

      </BlogWrapper>
    </ContentWrapper>
  )
}