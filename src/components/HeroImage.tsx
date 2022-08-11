import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'


const HeroImageWrapper = styled.div`
width: 100%;
height: 40%;
padding-top: 80px;
`

export default function HeroImage({ featuredImage }: any) {
  console.log(featuredImage)
  return (
    <HeroImageWrapper>
      <GatsbyImage image={featuredImage} alt="hero">

      </GatsbyImage>

    </HeroImageWrapper>
  )
}