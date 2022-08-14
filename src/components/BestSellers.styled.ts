import styled from 'styled-components'
import { device } from '../global-styles/mediaQueries'


export const BestSellersWrapper = styled.div`
position: relative;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  svg {
    position: absolute;
    width: 48px;
    height: 36px;
    top: 45%;
    z-index: 10;
    cursor: pointer;
  }
  .left-arr {
    left: 0px;
  }
  .right-arr {
    right: 0px
  }
  @media ${device.desktopS} {
    max-width: 880px;
    margin: 0 auto;
    justify-content: space-between;
    svg {
      display: none;
    }
  }
`

export const SingleBestSeller = styled.div<{ activeIndex: number }>`
position: relative;
width: 100vw;
padding:0 30px;
/* margin: 0 auto; */
margin-bottom: 40px;
/* padding: 20px; */
/* box-shadow: 0px 2px 20px 3px rgba(0,0,0,0.52); */
right: ${({ activeIndex }) => activeIndex * 100}vw;
transition: 0.3s;

@media ${device.desktopS} {
  width: 24%;
  padding: 0;
  box-shadow: -2px 10px 10px 2px rgba(0,0,0,0.35);

  a {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 90%;
    margin: 10px auto;

  }
}



`

export const BestSellerImgWrapper = styled.div``


export const BestSellersTitle = styled.h2`
  width: 75%;
  margin: 20px auto 30px;
  text-align: center;
`