import styled from 'styled-components'
import { device } from '../global-styles/mediaQueries'

export const NavMenuWrapper = styled.div<{ isMenuOpen: boolean }>`
  position: absolute;
  width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.highlight};
  left: ${({ isMenuOpen }) => isMenuOpen ? "0" : "100vw"};
  transition: 0.3s;
  top: 80px;
  z-index: 1000;
  padding: 20vh 24px;
  a { 
    position: relative;
    font-size: 28px;
    text-transform: uppercase;
    margin: 12px auto;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black60};
    font-family: 'Nunito Sans', sans-serif;
    transition: 0.3s;
    &:hover {
      color: ${({ theme }) => theme.colors.gold} !important;
    }

  }
  [aria-current] {
    color: ${({ theme }) => theme.colors.black};
  }

  @media ${device.desktopS} {
    width: fit-content;
    flex-flow: row;
    top: 0;
    height: 79px;
    padding: 0;
    //Center it 
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
      a {
      font-size: 16px;
      margin: 0 20px;
      &:hover {
       color: ${({ theme }) => theme.colors.gold};
      }
      }
    }
`

export const InstaIconLink = styled.a`
  @media ${device.desktopS} {
    display: none;
  }
`
export const InstaIcon = styled.img`
  width: 40px;
  @media ${device.desktopS} {
    display: none;
  }
`

export const LinkWrapper = styled.div`
  display: flex;
  flex-flow: column;
  @media ${device.desktopS} {
    flex-flow: row;

  }
`