import React from 'react'
import { GatsbyImageInterface } from '../globalInterface'
import { HeroSectionWrapper, SingleImageBox, FirstImageWrapper, OtherImagesWrapper } from './HeroSection.styled'
import { GatsbyImage } from "gatsby-plugin-image"


interface HeroProps {
  heroData: {
    categoryImage: GatsbyImageInterface
    categoryImage2: GatsbyImageInterface
    categoryImage3: GatsbyImageInterface
    categoryLink: string
    categoryLink2: string
    categoryLink3: string
    categoryTitle1: string
    categoryTitle2: string
    categoryTitle3: string
  }
}


export default function HeroSection({ heroData }: HeroProps) {
  console.log('heroData', heroData)
  const {
    categoryImage,
    categoryImage2,
    categoryImage3,
    categoryLink,
    categoryLink2,
    categoryLink3,
    categoryTitle1,
    categoryTitle2,
    categoryTitle3,
  } = heroData
  return (
    <HeroSectionWrapper>
      <FirstImageWrapper href={categoryLink}>
        <GatsbyImage alt="hero" image={categoryImage.localFile.childImageSharp.gatsbyImageData} />
        <h2>{categoryTitle1}</h2>
      </FirstImageWrapper>

      <OtherImagesWrapper>
        <SingleImageBox>
          <GatsbyImage alt="hero" image={categoryImage2.localFile.childImageSharp.gatsbyImageData} />
          <h2>{categoryTitle2}</h2>
        </SingleImageBox>

        <SingleImageBox>
          <GatsbyImage alt="hero" image={categoryImage3.localFile.childImageSharp.gatsbyImageData} />
          <h2>{categoryTitle3}</h2>
        </SingleImageBox>
      </OtherImagesWrapper>

    </HeroSectionWrapper>
  )
}