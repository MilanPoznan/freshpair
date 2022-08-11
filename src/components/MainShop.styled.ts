import styled from 'styled-components'
import { device } from '../global-styles/mediaQueries'
export const MainShopWrapper = styled.div`
  padding-top: 80px;
`


export const CategoryFiltersWrapper = styled.div`
position: relative;
  width: 90%;
  margin: 0 auto;
  max-width: 420px;


`

export const AllProductsBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 24px;

  @media ${device.desktopS} {
    width: 80%;
    float: right;
    justify-content: flex-start;

  }


`

export const SingleProduct = styled.div`
  width: 48%;
  text-align: center;
  @media ${device.desktopS} {
    width: 22%;
    margin-right: 2%;
    margin-bottom: 20px;
  }

`

export const ParrentCat = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
  padding: 4px;
`
export const ChildCat = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 4px 4px 10px;
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
  pointer-events: ${({ isParrentSelected }) => isParrentSelected ? 'none' : 'auto'};
  opacity: ${({ isParrentSelected }) => isParrentSelected ? 0.5 : 1};;
`

export const CategorySelectBox = styled.div<{ isOpen: boolean }>`
  position: relative;
  margin: 0 auto 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
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
  background-color: red;
  z-index: 100;
  width:100%;
  top: 40px;
  display: ${({ isPickCategoryOpen }) => isPickCategoryOpen ? 'block' : 'none'};
  @media ${device.desktopS} {
    position: fixed;
    display: flex;
    flex-flow: column;
    left: 40px;
    top: 170px;
    width: 15%;
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