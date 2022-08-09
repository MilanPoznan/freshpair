import styled from 'styled-components'

export const NavMenuWrapper = styled.div<{ isMenuOpen: boolean }>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  left: ${({ isMenuOpen }) => isMenuOpen ? "0" : "100vw"};
  transition: 0.3s;
  top: 80px;
  z-index: 1000;
  
`