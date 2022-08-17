import styled from 'styled-components'
import { Link } from 'gatsby'
import { device } from '../global-styles/mediaQueries'

export const FooterSection = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 100;
  color: white;
  padding: 48px 24px;
  img {
    margin-top: 30px;
    width: 30px;
  }
  a {
    text-decoration: none;
    font-family: 'Nunito Sans', sans-serif;
    color: ${({ theme }) => theme.colors.black};
    color: white;

  }
  svg {
    width: 30px;
    border-radius: 50%;
  }
  /* &:before {
    content: '';
    position: absolute;
    left: 5%;
    width: 90%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.gray};
    top: 0px;
  } */
  @media ${device.tablet} {
    flex-flow: row-reverse;
    padding: 26px 24px;
    justify-content: space-between;
    align-items: center;
    img {
    margin-top: 0px;
    width: 30px;
    } 
  }
  @media ${device.desktopS} {
  &:before {
    display: none;
    padding: 26px 80px;

  }
  }
`

export const PhoneNumber = styled.a`
  margin: 20px 0;
`

export const EmailParagraph = styled.a`

`


export const ContactLinkWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  svg {
    margin-bottom: 12px;
  }

  a {
    margin: 0 auto 40px;
    &:hover {
      color: ${({ theme }) => theme.colors.gold};
    }
  }
  @media ${device.tablet} {
    flex-flow: row;
    a {
      margin: 0 30px 0 10px;
    } 
    svg {
    margin-bottom: 0px;
  }

    
  }
`

export const LinksWrapp = styled.div`
  @media ${device.tablet} {
    display: flex;
  }
`