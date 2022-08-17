import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SneakerSlider from '../components/SneakerSlider'
import AddToCartCTA from '../components/AddToCartCTA'
import HeroImage from '../components/HeroImage'
import {
  SizesComponentWrapper, SizeAndCtaWrapp, SingleSize,
  nikeSizes, yeezy, addidasSizes, newBalanceSizes, ContentShoeWrapp, SingleShoeLayout
} from '../components/SizesComponent.styled'

import { WYSIWYGWrapper, Heading1, UppercaseLabel } from '../global-styles/globalComponents'


type Props = {
  data: any
}

export default function Shoe({ data }: Props) {

  const storeSessionStorage = typeof window !== 'undefined' && sessionStorage.getItem("store")
  const getItemsArr = storeSessionStorage && JSON.parse(storeSessionStorage)

  const { allWpMenu: { menus }, wpSneaker: { singleSneaker: galery, title, id, content, featuredImage, categories } } = data

  const hasGallery = galery.galery !== null;


  const [size, setSize] = useState('')
  const [isAlreadyInCart, setIsAlreadyInCart] = useState(false)
  const [currSizes, setCurrSizes] = useState([])


  function choseSizes() {
    const categoryArr: string[] = categories.nodes.map((item: any) => item.name)
    console.log(categoryArr)
    if (categoryArr.includes('Airmax') || categoryArr.includes('Nike') || categoryArr.includes("Jordan")) {
      return setCurrSizes(nikeSizes)
    } else if (categoryArr.includes('New Ballance')) {
      return setCurrSizes(newBalanceSizes)
    } else {
      return setCurrSizes(addidasSizes)
    }

  }

  useEffect(() => {
    getItemsArr && getItemsArr.forEach((element: any) => {
      if (element.id === id) {
        setIsAlreadyInCart(true)
        setSize(element.size)
      }

    });

    choseSizes()

  }, [])

  return (

    <Layout menus={menus[0]}>
      {galery && hasGallery && <SneakerSlider data={galery}></SneakerSlider>}
      {!hasGallery && <HeroImage featuredImage={featuredImage.node.localFile.childImageSharp.gatsbyImageData} />}

      <SingleShoeLayout>
        <ContentShoeWrapp>
          <Heading1>{title}</Heading1>
          <UppercaseLabel>{galery.shoeCode}</UppercaseLabel>
          <WYSIWYGWrapper dangerouslySetInnerHTML={{ __html: content }}></WYSIWYGWrapper>
        </ContentShoeWrapp>
        <SizeAndCtaWrapp>
          <SizesComponentWrapper>
            {currSizes.map((item: string) =>
              <SingleSize key={item} isActive={size === item} onClick={() => setSize(item)}>
                {item}
              </SingleSize>)}
          </SizesComponentWrapper>
          <AddToCartCTA isAlreadyInCart={isAlreadyInCart} name={title} id={id} size={size} isEnabled={size.length !== 0} />
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
      categories {
      nodes {
        ancestors {
          nodes {
            name
          }
        }
        name
      }
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

      singleSneaker {  
        shoeCode
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