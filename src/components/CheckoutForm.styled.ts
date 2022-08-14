import styled from 'styled-components'
import { device } from '../global-styles/mediaQueries'
export const CheckoutFormWrapper = styled.div`
`


export const InputFieldWrapper = styled.div``



export const TextArea = styled.textarea<{ isError: boolean }>`
  width: 100%;
  border: 1px solid #ced4da;
  height: 120px;
  padding: 8px;

`

export const CheckoutWrapper = styled.div`
  padding: 100px 24px;
  @media ${device.tablet} {
    max-width: 80%;
    min-width: 400px;
    margin: 0 auto;
  }
`

export const CheckoutItemsWrapper = styled.div`
padding: 10px 0px 0px;
`

export const ContentItemWrapp = styled.div`
display: flex;
align-items: center;
`
export const SingleCheckoutItem = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
align-items: center;
padding-right: 12px;
margin: 20px 0 30px;
box-shadow: 4px 14px 25px 0px rgba(0,0,0,0.4);


/* border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor}; */
a {
  text-decoration: none;
  color: ${({ theme }) => theme.colors.accent_primary};
  font-size: 20px;
}
.gatsby-image-wrapper {
  width: 70px;
  height: 70px;
  margin-right: 12px;
}

`

export const RemoveIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 20px;
  transform: rotate(45deg);
  color: white;
  background-color: red;
  width: 30px;
  height: 30px;
  position: relative;
  &:before, &:after {
    content: '';
    position: absolute;
    width: 2px;
    height: 20px;
    background-color: white;
    top: 5px;
  }
  &:after {
    transform: rotate(90deg);
  }

`