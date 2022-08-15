import styled from 'styled-components'
import { device } from '../global-styles/mediaQueries'

export const MainShopWrapper = styled.div`
  padding-top: 120px;
  @media ${device.desktopS} {
    padding-top: 160px;

  }
`


export const CategoryFiltersWrapper = styled.div`
position: relative;
  width: 90%;
  margin: 0 auto;
  max-width: 420px;
`

export const AllProductsBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 24px;
  min-height: 80vh;

  @media ${device.desktopS} {
    width: calc(100% - 280px);
    float: right;
    justify-content: flex-start;
    &:before {
      content: "Products";
      position: absolute;
      left: 20px;
      top: -50px;
      font-size: 24px;
    }
  }

`

export const SingleProduct = styled.div`
  width: 48%;
  text-align: center;
  margin-bottom: 40px;
  a {
    position: relative;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.borderColor};
    text-transform: uppercase;
    font-weight: 500;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: bold;
    max-width: 80%;
    margin: 0 auto;
    &:before {
      content: '';
      position: absolute;
      height: 2px;
      width: 8px;
      left: 0; 
      right: 0; 
      margin-left: auto; 
      margin-right: auto; 
      bottom: -4px;
      background-color: ${({ theme }) => theme.colors.black};
      transition: 0.3s;
    }
    &:hover {
      &:before {
        width: 100%;
      }
    }
  }
  @media ${device.tabletL} {
    width: 32%;
  }
  @media ${device.desktopS} {
    width: 22%;
    margin-right: 2%;
    margin-bottom: 40px;
  }

`

export const SingleProductImageWrapper = styled.div`
  max-height: 160px;
  height: 160px;
  margin-bottom: 10px;
  overflow: hidden;
  .gatsby-image-wrapper {
    height: 160px;
    max-height: 160px;
    transition: 0.3s;
    img {
      height: 100%;
      object-fit: contain;
    }
  }
  &:hover {
    .gatsby-image-wrapper {
      transform: scale(1.1);
    }
  }
  @media ${device.tablet} {
    max-height: 200px;
    height: 200px;
    margin-bottom: 12px;
    .gatsby-image-wrapper {
      height: 200px;
      max-height: 200px;
    }
  }
  @media ${device.desktopS} {
    max-height: 180px;
    height: 180px;
    margin-bottom: 12px;
  .gatsby-image-wrapper {
    height: 180px;
    max-height: 180px;
  }
  }
`

export const ParrentCat = styled.div`
position: relative;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
  padding: 4px;
`
export const ChildCat = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 4px 4px 4px 14px;
  &:before {
    content: '-';
    position: absolute;
    left: 0px;

  }
`

export const SingleMainCatAll = styled.div`
  display:flex;
  flex-flow: column;

`

export const SingleCategoryWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items:  space-between;
`

export const CategoryCheckBoxStyle = styled.div<{ isParrentSelected: boolean }>`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  display: flex;
  align-items: center;
justify-content: center;
  pointer-events: ${({ isParrentSelected }) => isParrentSelected ? 'none' : 'auto'};
  opacity: ${({ isParrentSelected }) => isParrentSelected ? 0.5 : 1};;
`

export const CategorySelectBox = styled.div<{ isOpen: boolean }>`
  position: relative;
  margin: 0 auto 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  color: ${({ theme }) => theme.colors.borderColor};
  font-weight: bold;
  font-family: 'Nunito Sans', sans-serif;
  svg {
    width: 20px;
    transition: 0.3s;
    transform: ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0deg)'} ;
  }

  @media ${device.desktopS} {
    display: none;
  }
`

export const CategorySelectOptions = styled.div<{ isPickCategoryOpen: boolean }>`
  position: absolute;
  padding: 24px;
  background-color: white;
  z-index: 100;
  width:100%;
  top: 40px;
  display: ${({ isPickCategoryOpen }) => isPickCategoryOpen ? 'block' : 'none'};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  max-height: 400px;
  overflow-y: scroll;
  border-top: 0px;
  font-family: 'Nunito Sans', sans-serif;

  @media ${device.desktopS} {
    position: relative;
    position: fixed;
    display: flex;
    flex-flow: column;
    left: 0px;
    top: 160px;
    width: 260px;


    /* background-color: ${({ theme }) => theme.colors.highlight}; */
    min-height: calc(100vh - 80px);
    height: calc(100vh - 80px);

    border: none;
    border-right: 1px solid ${({ theme }) => theme.colors.gray};
    padding-top: 4px;
    overflow: initial;
    /* 
    OPcija 2 
    border-radius: 10px;
    box-shadow: 4px 14px 25px 0px rgba(0,0,0,0.4);
     */
    &:before {
      content: 'Filters';
      position: absolute;
      font-size: 24px;
      top: -46px;
      z-index: 100;
    }
  }

`

export const SearchForOptions = styled.div`

  width: 90%;
  height: 40px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto 0;


`

export const DesktopCategories = styled.div`

`

