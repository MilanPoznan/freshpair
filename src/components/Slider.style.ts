import styled from 'styled-components'
import { device } from "../global-styles/mediaQueries"

const handleCurrentSlideTransform = (active: number, index: number, isImg?: boolean) => {
  switch (true) {
    case active > index:
      return isImg ? `translateX(80%)` : `translateX(-100%)`;
    case active === index:
      return `translateX(0%)`;
    case active < index:
      return isImg ? `translateX(-80%)` : `translateX(100%)`;
    default:
      return null
  }
}

export const SliderSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-top: 80px;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    width:100%;
    background-color: ${({ theme }) => theme.colors.white};
    z-index: 2;
  }

  @media ${device.tabletL} {
    &:after {
      height: 64px;
    }
  }

  @media ${device.desktopS} {
    height: calc(100vh - 111px);
    min-height: 650px;
    max-height: 720px;

    &:after {
      height: 50px;
    }
  }
  @media ${device.desktopL} {
    min-height: 800px;
    max-height: 1080px;

    &:after {
      height: 64px;
    }
  }
`
export const SliderSectionWrapper = styled.div`
  padding: 40px 0 140px;

  @media ${device.tablet} {
    padding: 60px 0 160px;
  }
  @media ${device.tabletL} {
    padding: 60px 0 208px;
  }
  @media ${device.desktopS} {
    padding: 42px 0;
  }
  @media ${device.desktop} {
    padding: 24px 0;
  }
  @media ${device.desktopL} {
    padding: 118px 0;
  }
`
export const SliderContainer = styled.div`
  position: relative;
  display: block;
  height: 0px;
  padding-top: 56.25%;
  overflow: hidden;

  @media ${device.desktopS} {
    height: 540px;
    padding-top: 0;
  }
  @media ${device.desktop} {
    height: 574px;
  }
  @media ${device.desktopL} {
    height: 662px;
  }
`
export const SingleSlide = styled.div<{ active: number, index: number, transitionActive: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: ${({ active, index }) => active === index ? 2 : 1};
  transform: ${({ active, index }) => handleCurrentSlideTransform(active, index)};
  transition: transform ${({ transitionActive }) => !transitionActive ? 'none' : '0.8s'} cubic-bezier(.645,.075,.275,.995);

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    transform: ${({ active, index }) => handleCurrentSlideTransform(active, index, true)};
    transition: transform ${({ transitionActive }) => !transitionActive ? 'none' : '0.8s'} cubic-bezier(.645,.075,.275,.995);
  }
`
export const SingleSlideWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`
export const SliderPagination = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 60px);
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  padding: 38px 30px;
  font-family: var(--regular);
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  z-index: 3;

  @media ${device.tablet} {
    left: unset;
    margin-right: unset;
    width: 100%;
    max-width: 640px;
  }
  @media ${device.tabletL} {
    height: 128px;
    max-width: 768px;
    padding: 38px 50px;
  }
  @media ${device.desktopS} {
    height: 100px;
    max-width: 643px;
  }
  @media ${device.desktopL} {
    height: 128px;
    max-width: 768px;
  }
`
export const SliderArrows = styled.div`
  display: flex;
`
export const SliderSingleArrow = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 100%;
  outline: none;
  
  &:first-child {
    margin-right: 12px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  svg {
    width: 15px;
  }
`
export const SliderCounter = styled.div`
  color: ${({ theme }) => theme.colors.white};
`

export const SliderMicroText = styled.div`
  display: none;

  @media ${device.desktopS} {
    position: absolute;
    top: 50%;
    display: flex;
    width: fit-content;
    font-family: var(--regular);
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transform: rotate(-90deg);
  }
`


export const ContentWrapper = styled.div`
width: 100%;
padding: 0px 30px 0px 30px;
  @media ${device.tablet} {
    padding: 0px 50px 0px 50px;
  }
  @media ${device.tabletL} {
    padding: 0px 80px 0px 80px;
  }
  @media ${device.desktopS} {
    max-width: 960px;
    margin: 0 auto;
    padding: 0;
  }
  @media ${device.desktop} {
    max-width: 1024px;
  }
  @media ${device.desktopL} {
    max-width: 1180px;
  }
`