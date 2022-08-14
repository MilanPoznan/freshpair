import React, { useState } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SneakerSlider from '../components/SneakerSlider'
import AddToCartCTA from '../components/AddToCartCTA'
import HeroImage from '../components/HeroImage'
import { SizesComponentWrapper, SizeAndCtaWrapp, SingleSize, yeezy, ContentShoeWrapp, SingleShoeLayout } from '../components/SizesComponent.styled'

import { WYSIWYGWrapper, Heading1 } from '../global-styles/globalComponents'


type Props = {
  data: any
}

export default function Shoe({ data }: Props) {

  const { allWpMenu: { menus }, wpSneaker: { singleSneaker: galery, title, id, content, featuredImage } } = data

  const hasGallery = galery.galery !== null;

  const [size, setSize] = useState('')

  return (
    <Layout menus={menus[0]}>

      {galery && hasGallery && <SneakerSlider data={galery}></SneakerSlider>}
      {!hasGallery && <HeroImage featuredImage={featuredImage.node.localFile.childImageSharp.gatsbyImageData} />}
      <SingleShoeLayout>
        <ContentShoeWrapp>
          <Heading1>{title}</Heading1>
          <WYSIWYGWrapper dangerouslySetInnerHTML={{ __html: content }}></WYSIWYGWrapper>
        </ContentShoeWrapp>
        <SizeAndCtaWrapp>
          <SizesComponentWrapper>
            {yeezy.map((item: string) =>
              <SingleSize key={item} isActive={size === item} onClick={() => setSize(item)}>
                {item}
              </SingleSize>)}
          </SizesComponentWrapper>
          <AddToCartCTA name={title} id={id} size={size} isEnabled={size.length !== 0} />
        </SizeAndCtaWrapp>
      </SingleShoeLayout>
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