import React, { useEffect, useState } from 'react'
import { CheckoutItemsWrapper, SingleCheckoutItem, RemoveIcon, ContentItemWrapp } from './CheckoutForm.styled'
type Props = {}
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { UppercaseLabel } from '../global-styles/globalComponents'


export default function CheckoutItems({ }: Props) {

  const storeSessionStorage = typeof window !== 'undefined' && sessionStorage.getItem("store")

  let storeSessionStorageArr = storeSessionStorage && JSON.parse(storeSessionStorage)

  const allSneakerData = useStaticQuery(graphql`{
    allWpSneaker {
        nodes {
          id
          link
          slug
          status
          title
          uri
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

  const [orders, setOrders] = useState<any[]>([])

  const removeFromSessionStorage = (id: string) =>
    storeSessionStorageArr.filter((item: any) => item.id !== id)


  function removeHandler(id: string) {
    const cart = removeFromSessionStorage(id)
    if (cart.length === 0) {
      sessionStorage.clear();
    } else {
      sessionStorage.setItem('store', JSON.stringify(cart))
    }


    const filteredArr: any = orders.filter((item: any) => item.id !== id)
    setOrders(filteredArr)
  }


  useEffect(() => {

    let arr: any[] = [];
    console.log(storeSessionStorageArr)



    storeSessionStorageArr && storeSessionStorageArr.forEach((storeItem: any) => {
      allSneakerData.allWpSneaker.nodes.map((sneaker: any) => {
        if (sneaker.id === storeItem.id) {
          arr.push(sneaker)
        }
      })
    })
    setOrders(arr)

    console.log('arr', arr)





  }, [])


  return (
    <CheckoutItemsWrapper>
      <UppercaseLabel> Items in cart</UppercaseLabel>
      {orders && orders.map((item: any, index: number) =>

        <SingleCheckoutItem key={item.id}>
          <ContentItemWrapp>
            <GatsbyImage image={item.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt="product" />
            <Link to={item.uri}>
              {item.title}
            </Link>

          </ContentItemWrapp>
          <RemoveIcon onClick={() => removeHandler(item.id)}></RemoveIcon>
        </SingleCheckoutItem>
      )}
    </CheckoutItemsWrapper>
  )
}



