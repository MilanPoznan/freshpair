import styled from 'styled-components'

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

`

export const SingleProduct = styled.div`
  width: 48%;
  text-align: center;

`

export const ParrentCat = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 4px;
`
export const ChildCat = styled.div`

padding: 4px;
`

export const SingleMainCatAll = styled.div`
  display:flex;
  flex-flow: column;

`

export const SingleCategoryWrapper = styled.div`
  display: flex;
  flex-flow: row-reverse;
  justify-content: space-between;
  align-items: center;
`

export const CategoryCheckBoxStyle = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid black;
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
`

export const CategorySelectOptions = styled.div`
  position: absolute;
  padding: 24px;
  background-color: red;
  z-index: 100;
  width:100%;
  top: 40px;

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