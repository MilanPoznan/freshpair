import styled from 'styled-components'
import { device } from "../global-styles/mediaQueries";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  /* grid-template-columns: 1fr auto 1fr; */
  width: 100%;
  background-color: ${({ theme }) => theme.colors.highlight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  z-index: 10;
  height: 80px;
  @media ${device.desktopS} {
    /* grid-template-columns: auto 1fr; */
    /* grid-template-rows: auto auto; */
  }
`



export const HamburgerButton = styled.div<{ isMenuOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30px;
  width: fit-content;
  margin: auto 0 auto auto;
  cursor: pointer;
  span {
    position: relative;
    width: 30px;
    height: 2px;
    transition: background-color .3s cubic-bezier(0.71, 0.01, 0.15, 0.75);
    background-color: ${({ theme, isMenuOpen }) => isMenuOpen ? theme.colors.primary : theme.colors.black};
    ::before, ::after {
      position: absolute;
      width: 30px;
      height: 2px;
      transform-origin: 75%;
      transition: transform .3s cubic-bezier(0.71, 0.01, 0.15, 0.75);
      background-color: ${({ theme }) => theme.colors.black};
      content: '';
    }
    ::before {
      bottom: 7px;
      transform: ${({ isMenuOpen }) => isMenuOpen ? `rotate(-45deg) translateX(-3px)` : `rotate(0deg) translateX(0px)`};
    }
    ::after {
      top: 7px;
      transform: ${({ isMenuOpen }) => isMenuOpen ? `rotate(45deg) translateX(-2px)` : `rotate(0deg) translateX(0px)`};
    }
  }
  @media ${device.desktopS} {
    display: none;
  }
`

export const LogoWrapper = styled.div`
  a {
    margin-top: 5px;
  }
  svg {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  @media ${device.desktopS} {
    margin-left: 24px;
  }
`

export const SocialsComponentWrapper = styled.div`
  display: none;
  @media ${device.desktopS} {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }
`

export const CTAWrapper = styled.div`
  display: flex;
  align-items: center;

`


export const CartHeaderWrapper = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 20px;

  img {
    width: 100%;
    height: 100%;
  }
`