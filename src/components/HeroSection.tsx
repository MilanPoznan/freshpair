import React from 'react'
import { GatsbyImageInterface } from '../globalInterface'
import { HeroSectionWrapper, FirstBox, ImgHoverWrapper, SingleImageBox, FirstImageWrapper, OtherImagesWrapper } from './HeroSection.styled'
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

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



  const createPathAndCategoryState = (url: string) => url.split('/')

  console.log(createPathAndCategoryState(categoryLink))
  return (
    <HeroSectionWrapper>

      <FirstBox>
        <FirstImageWrapper>
          <GatsbyImage alt="hero" image={categoryImage.localFile.childImageSharp.gatsbyImageData} />
          <Link state={{ activeCat: createPathAndCategoryState(categoryLink)[1] }} to={`/${createPathAndCategoryState(categoryLink)[0]}`}>{categoryTitle1}</Link>
        </FirstImageWrapper>
      </FirstBox>

      <OtherImagesWrapper>

        <SingleImageBox>
          <GatsbyImage alt="hero" image={categoryImage2.localFile.childImageSharp.gatsbyImageData} />
          <Link state={{ activeCat: createPathAndCategoryState(categoryLink2)[1] }} to={`/${createPathAndCategoryState(categoryLink2)[0]}`} > {categoryTitle2}</Link>
        </SingleImageBox>

        <SingleImageBox>
          <GatsbyImage alt="hero" image={categoryImage3.localFile.childImageSharp.gatsbyImageData} />
          <Link state={{ activeCat: createPathAndCategoryState(categoryLink3)[1] }} to={`/${createPathAndCategoryState(categoryLink3)[0]}`}>{categoryTitle3}</Link>
        </SingleImageBox>

      </OtherImagesWrapper>

    </HeroSectionWrapper>
  )
}