import React, { useState, useEffect, TouchEvent } from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import { GatsbyImageInterface } from '../globalInterface'

//Styles
// import { ContentWrapper } from '../global-styles/globalComponents.styled'
import {
  ContentWrapper,
  SliderSection,
  SliderSectionWrapper,
  SliderContainer,
  SingleSlide,
  SingleSlideWrapper,
  SliderPagination,
  SliderArrows,
  SliderSingleArrow,
  SliderMicroText
} from './Slider.style'

type SliderProps = {
  data: {
    galery: [
      {
        image: GatsbyImageInterface
      }
    ];
    sliderLabel: string;
  }
}


export default function SneakerSlider({ data }: SliderProps) {

  const { galery, sliderLabel } = data

  const [activeSlide, setActiveSlide] = useState(1)
  const [transitionActive, setTransitionActive] = useState(true)
  const [initialX, setInitialX] = useState(0)
  const [currentX, setCurrentX] = useState(0)

  const sliderImagesLength = galery.length
  const firstSlideImg = galery[0]
  const lastSlideImg = galery[sliderImagesLength - 1]
  const newSliderImages = galery.slice(0)
  newSliderImages.push(firstSlideImg)
  newSliderImages.unshift(lastSlideImg)

  const prevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide => activeSlide - 1)
    }
  }

  const nextSlide = () => {
    if (activeSlide <= sliderImagesLength) {
      setActiveSlide(activeSlide => activeSlide + 1)
    }
  }

  /**
   * handleOnTouchStart - indicated that a new touch on the surface has occurred
   * 
   * @param {event} e 
   */
  const handleOnTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setInitialX(e.touches[0].clientX)
  }

  /**
   * handleOnTouchMove - handling information for touch from initial to the current position
   * 
   * @param {event} e 
   */
  const handleOnTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (initialX === null) {
      return;
    }
    setCurrentX(e.touches[0].clientX)
  }

  /**
   * handleOnTouchEnd - handling the end of a touch
   * 
   */
  const handleOnTouchEnd = () => {

    if (sliderImagesLength === 1) return

    let totalTouchDistance = Math.round(initialX - currentX)
    if (totalTouchDistance > 5) {
      nextSlide()
    } else if (totalTouchDistance < -5) {
      prevSlide()
    } else {
      return
    }
  }

  const preparedPaginationCounter = () => {
    if (activeSlide === 0) {
      return 1
    } else if (activeSlide === newSliderImages.length - 1) {
      return newSliderImages.length - 2
    } else {
      return activeSlide
    }
  }

  const handleTransitionEnd = () => {
    if (activeSlide === 0) {
      setTransitionActive(false)
      setActiveSlide(newSliderImages.length - 2)
    } else if (activeSlide === newSliderImages.length - 1) {
      setTransitionActive(false)
      setActiveSlide(1)
    }
  }

  useEffect(() => {
    let timer: number

    if (activeSlide !== 0 && activeSlide !== newSliderImages.length - 1) {
      timer = window.setTimeout(() => setTransitionActive(true), 10)
    }

    return () => clearTimeout(timer)
  }, [activeSlide])

  return (
    <SliderSection>
      <ContentWrapper>
        <SliderSectionWrapper>
          <SliderContainer>
            {newSliderImages.map((element, index) =>
              <SingleSlide
                key={index}
                active={activeSlide}
                index={index}
                transitionActive={transitionActive}
                onTouchStart={handleOnTouchStart}
                onTouchMove={handleOnTouchMove}
                onTouchEnd={handleOnTouchEnd}
                onTransitionEnd={handleTransitionEnd}
              >
                <SingleSlideWrapper>
                  <GatsbyImage image={element?.image?.localFile?.childImageSharp.gatsbyImageData} alt={element?.image?.altText ? element.image.altText : 'Slider image'} />
                </SingleSlideWrapper>
              </SingleSlide>
            )}
          </SliderContainer>
        </SliderSectionWrapper>
      </ContentWrapper>

      {sliderImagesLength > 1 &&
        <SliderPagination>
          <div>
            <span>{preparedPaginationCounter()}</span>
            &nbsp;/&nbsp;
            <span>{sliderImagesLength}</span>
          </div>
          <SliderArrows>
            <SliderSingleArrow onClick={prevSlide}
              role="button"
              tabIndex={0}>
              <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 5.5H0.5" stroke="#191B1A" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.5 0.5L0.5 5.5L5.5 10.5" stroke="#191B1A" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </SliderSingleArrow>
            <SliderSingleArrow onClick={nextSlide}
              role="button"
              tabIndex={0}>
              <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 5.5H15.5" stroke="#191B1A" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.5 0.5L15.5 5.5L10.5 10.5" stroke="#191B1A" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </SliderSingleArrow>
          </SliderArrows>
        </SliderPagination>}

      {sliderLabel && <SliderMicroText>{sliderLabel}</SliderMicroText>}
    </SliderSection>
  )
} 