import React, { useEffect, useState } from 'react'
import { CheckoutItemsWrapper, SingleCheckoutItem, RemoveIcon } from './CheckoutForm.styled'
type Props = {}
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
export default function CheckoutItems({ }: Props) {

  const storeSessionStorage = sessionStorage.getItem("store")

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

    sessionStorage.setItem('store', JSON.stringify(removeFromSessionStorage(id)))


    const filteredArr: any = orders.filter((item: any) => item.id !== id)
    setOrders(filteredArr)
  }


  const state = {}
  useEffect(() => {

    let arr: any[] = [];
    console.log(storeSessionStorageArr)



    storeSessionStorageArr.forEach((storeItem: any) => {
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
      <h2>My items</h2>
      {orders && orders.map((item: any) =>

        <SingleCheckoutItem>
          <GatsbyImage image={item.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt="product" />
          <Link to={item.uri}>
            {item.title}
          </Link>
          <RemoveIcon onClick={() => removeHandler(item.id)}></RemoveIcon>
        </SingleCheckoutItem>
      )}
    </CheckoutItemsWrapper>
  )
}



