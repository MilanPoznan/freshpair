import React from 'react'
import Slider from "react-slick";
import styled from 'styled-components'

import { GatsbyImage } from "gatsby-plugin-image"
import { GatsbyImageInterface3 } from '../globalInterface'


type Props = {
  galery: {
    galery: GatsbyImageInterface3[]
  }
}


export const SliderWrapper = styled.div`
padding-top: 80px;
`
export const ImageSliderWrapper = styled.div`
  display: flex;
  .gatsby-image-wrapper {
    min-width: 100vw;
    height: 40vh;
  }

`


export default function SneakerSlider({ galery }: Props) {

  console.log('first', galery.galery)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <SliderWrapper>
      <ImageSliderWrapper>
        {galery.galery.map((item, index) => <GatsbyImage key={index} alt={item.image.altText ? item.image.altText : 'Shoes'} image={item.image.localFile.childImageSharp.gatsbyImageData}></GatsbyImage>)}

      </ImageSliderWrapper>

    </SliderWrapper>
  )
}