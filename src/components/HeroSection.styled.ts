import styled from 'styled-components'
import { device } from '../global-styles/mediaQueries'

export const HeroSectionWrapper = styled.section`
  padding-top: 80px;
  display: flex;
  flex-flow: column;
  margin-bottom: 40px;

@media ${device.desktopS} {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0px;

}
`

export const FirstBox = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  margin-bottom: 12px;
  overflow: hidden;
  @media ${device.desktopS} {
    height: 50vh;
    width: calc(70% - 12px);
  }
  @media ${device.desktopS} {
    height: 70vh;
  }
`

export const FirstImageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  max-height: 100%;
  min-height: 100%;
  overflow: hidden;
  .gatsby-image-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: 0.3s;
  }
  a {
    position: relative;
    z-index: 1;
    left: 20px;
    font-family: 'Nunito Sans', sans-serif;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
    font-weight: 500;
    font-size: 22px;

  }
  text-decoration: none;

  &:hover {
    .gatsby-image-wrapper {
      transform: scale(1.1);
    }
  }
`

export const OtherImagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20vh;
  width: 100%;
  @media ${device.desktopS} {
    flex-flow: column;
    width: 30%;
    height: 50vh;
  }
  @media ${device.desktopS} {
    height: 70vh;
  }
`

export const SingleImageBox = styled.div`
  position: relative;
  min-height: 100%;
  width: calc(50% - 6px);
  height: 200px;
  overflow: hidden;
  .gatsby-image-wrapper {
    transition: 0.3s;
    height: 200px;
  }
  a {
    position: absolute;
    bottom: 12px;
    left: 12px;
    margin: 0;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 500;
    text-decoration: none;
  }
  &:hover {
    .gatsby-image-wrapper {
      transform: scale(1.1);
    }
  }

  @media ${device.desktopS} {
    width: 100%;
    flex-flow: column;
    height: calc(50% - 6px);
    min-height: calc(50% - 6px);
    .gatsby-image-wrapper {
      height: 100%;
    }
    &:first-child {
      margin-bottom: 12px;
    }
  }
  @media ${device.desktopS} {
    height: 70vh;
  }
`

export const ImgHoverWrapper = styled.div`

`
