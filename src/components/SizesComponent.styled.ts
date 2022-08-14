
import styled from 'styled-components'
import { device } from '../global-styles/mediaQueries'

export const yeezy = [
  "36", "36 2/3", "37 1/3", "38", "38 2/3", "39  1/3", "40", "40 2/3", "41 1/3", "42 ", "42 2/3", "43 1/3", "44 2/3", " 451/3", "46", "46 2/3", " 47 1/3", "48 ", "48 2/3", "49 1/3"
]

export const nikeSizes = [
  "36", "36 ,5", "37 ,5", "38", "38, 5", "39", "40", "40, 5", "41", "42", "42, 5", "43", "44", "44, 5", "45", " 45, 5", "46", "47", "47, 5", "48, 5"
]
const allSizes = []

export const SizesComponentWrapper = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px auto;
  @media ${device.tablet} {
    margin: 40px auto;
  }

`

export const SingleSize = styled.div<{ isActive: boolean }>`
  border: 1px solid #000;
  font-size: 16px;
  width: 17%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 5px;
  font-size: 14px;
  cursor: pointer;
  color: ${({ theme, isActive }) => isActive ? theme.colors.white : theme.colors.black};
  opacity: ${({ isActive }) => isActive ? 1 : 0.6};
  background-color: ${({ theme, isActive }) => isActive ? theme.colors.black : theme.colors.white};
`



export const SingleShoeLayout = styled.div`
  padding: 24px;
position: relative;
  @media ${device.tabletL} {
    display: flex;
  }
  @media ${device.desktop} {
    max-width: 1024px;
    margin: 0 auto;
  }
  @media ${device.desktopL} {
    max-width: 1180px;
    margin: 0 auto;
  }
`

export const ContentShoeWrapp = styled.div`
  @media ${device.tabletL} {
    width: 50%;
    padding: 0 3%;
  }

`

export const SizeAndCtaWrapp = styled.div`
  @media ${device.tabletL} {
    width: 50%;
    padding: 0 3%;
  }

`