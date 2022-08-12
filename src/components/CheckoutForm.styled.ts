import styled from 'styled-components'

export const CheckoutFormWrapper = styled.div`
`


export const InputFieldWrapper = styled.div``

export const InputField = styled.input<{ isError: boolean }>
  ``

export const InputLabel = styled.div``


export const SubmitFormBtn = styled.button``

export const TextArea = styled.textarea<{ isError: boolean }>``

export const CheckoutWrapper = styled.div`
padding: 100px 24px;
  
`

export const CheckoutItemsWrapper = styled.div`
padding: 100px 24px;
`

export const SingleCheckoutItem = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
margin: 20px 0;
a {
  text-decoration: none;
  color: ${({ theme }) => theme.colors.accent_primary};
  font-size: 24px;
}
.gatsby-image-wrapper {
  width: 70px;
  height: 70px;
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