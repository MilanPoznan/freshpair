import styled from 'styled-components'
import { device } from '../global-styles/mediaQueries'

export const HeroSectionWrapper = styled.section`
padding-top: 100px;
@media ${device.desktopS} {
  display: flex;
  flex-flow: row;
}


`

export const FirstImageWrapper = styled.a`
  position: relative;
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 20px;
  .gatsby-image-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  h2 {
    position: relative;
    z-index: 1;
    left: 20px;
  }
  @media ${device.desktopS} {
    width: 70%;
  }
`

export const OtherImagesWrapper = styled.div`
display: flex;
justify-content: space-between;
height: 20vh;
width: 100%;
@media ${device.desktopS} {
  flex-flow: column;
  }
`

export const SingleImageBox = styled.div`
width: calc(50% - 10px);
height: 100%;
border: 1px solid red;
  @media ${device.desktopS} {
    flex-flow: column;
  }
`