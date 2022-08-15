import styled from 'styled-components'
import { Link } from 'gatsby'
import { device } from '../global-styles/mediaQueries'

export const FooterSection = styled.section`
  position: relative;
  padding: 40px 0;
  width: 100%;
  display: flex;
  flex-flow: column;
  /* justify-content: ; */
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 100;
  /* color: white; */
  img {
    margin-top: 30px;
    width: 30px;
  }
  a {
    text-decoration: none;
    font-family: 'Nunito Sans', sans-serif;
    color: ${({ theme }) => theme.colors.black};
  }
  &:before {
    content: '';
    position: absolute;
    left: 5%;
    width: 90%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.gray};
    top: 0px;
  }
  @media ${device.desktopS} {
  &:before {
    display: none;
  }
  }
`

export const PhoneNumber = styled.a`
  margin: 20px 0;
`

export const EmailParagraph = styled.a`

`

