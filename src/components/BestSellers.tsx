import React, { useState } from 'react'
import { GatsbyImageInterface2 } from '../globalInterface'
import { Link } from 'gatsby'
import { BestSellersWrapper, SingleBestSeller, BestSellersTitle, BestSellerImgWrapper } from './BestSellers.styled'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ContentWrapper } from '../global-styles/globalComponents'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

//Hooks
import useSliderHook from '../hooks/useSliderHook';
type Props = {
  bestSellers: {
    featuredImage: GatsbyImageInterface2
    id: string
    title: string
  }
}

export default function BestSellers({ bestSellersArr }: any) {

  console.log(bestSellersArr)

  const [activeSlide, setActiveSlide] = useState(0)

  const [nextSlide, previousSlide, onTouchStart, onTouchMove, onTouchEnd] = useSliderHook(activeSlide, bestSellersArr, setActiveSlide);



  return (

    <div>
      <BestSellersTitle>Best sellers</BestSellersTitle>
      <BestSellersWrapper
        onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        {/* Left arrow */}
        <svg
          onClick={previousSlide}
          onKeyPress={(e: any) => e.charCode === 32 ? previousSlide : null}
          role="button"
          tabIndex={0}
          width="82" height="64" viewBox="0 0 82 64" className='left-arr'>
          <path fill="none" fill-rule="evenodd" stroke="#000" stroke-width="3" d="M32.678 3.876L3.875 32.678c-.429.43-1.125.43-1.553 0-.43-.429-.43-1.124 0-1.553L31.125 2.32c.429-.428 1.124-.428 1.553 0 .43.43.43 1.125 0 1.555M80 32h0c0 .552-.492 1-1.1 1H38.1c-.607 0-1.1-.448-1.1-1s.493-1 1.1-1h40.8c.608 0 1.1.448 1.1 1M32.678 60.125L3.875 31.322c-.429-.43-1.125-.43-1.553 0-.43.429-.43 1.125 0 1.554l28.803 28.802c.429.43 1.124.43 1.553 0 .43-.429.43-1.125 0-1.553" />
        </svg>

        {/* Right Arrow */}
        <svg
          onClick={nextSlide}
          onKeyPress={(e) => e.charCode === 32 ? nextSlide : null}
          role="button"
          tabIndex={0}
          xmlns="http://www.w3.org/2000/svg" width="82" height="64" viewBox="0 0 82 64" className='right-arr'>
          <path fill="none" fill-rule="evenodd" stroke="#000" stroke-width="3" d="M49.322 3.876l28.803 28.802c.429.43 1.125.43 1.553 0 .43-.429.43-1.124 0-1.553L50.875 2.32c-.429-.428-1.124-.428-1.553 0-.43.43-.43 1.125 0 1.555M2 32h0c0 .552.492 1 1.1 1h40.8c.607 0 1.1-.448 1.1-1s-.493-1-1.1-1H3.1c-.608 0-1.1.448-1.1 1m47.322 28.125l28.803-28.803c.429-.43 1.125-.43 1.553 0 .43.429.43 1.125 0 1.554L50.875 61.678c-.429.43-1.124.43-1.553 0-.43-.429-.43-1.125 0-1.553" />
        </svg>

        {bestSellersArr.map((item: any) => <SingleBestSeller
          activeIndex={activeSlide}
          key={item.bestSeller.id}>
          <BestSellerImgWrapper>
            <GatsbyImage alt="best sellers" image={item.bestSeller.featuredImage.node.localFile.childImageSharp.gatsbyImageData} />
          </BestSellerImgWrapper>
          <Link to={item.bestSeller.uri}>
            {item.bestSeller.title}
          </Link>
        </SingleBestSeller>)}
      </BestSellersWrapper>
    </div>
  )
}