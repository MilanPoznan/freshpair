import React, { useState, useEffect } from 'react'
import { FormAlert, CheckoutFormWrapper, InputFieldWrapper, TextArea }
  from './CheckoutForm.styled'

import { UppercaseLabel } from '../global-styles/globalComponents'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { CtaButton } from './AddToCartCTA'
type Props = {}

//@ts-ignore
import checkkmartPath from '../images/checkmark.png'
import errorIconPath from '../images/erroricon.png'

import CheckoutItems from './CheckoutItems'

type DataRequestShape = {
  nameField: string,
  emailField: string,
  phoneField: string,
  textField: string,
  shoes: string
}

type setStateArray = [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  string
]

export const fetchWithTimeout = (fetchFunc: Function, data: any, timeout: number) => {
  return Promise.race([
    fetchFunc(data),
    new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), timeout))
  ]);
}

export default function CheckoutForm({ }: Props) {


  const storeSessionStorage = typeof window !== 'undefined' && sessionStorage.getItem("store")

  let storeSessionStorageArr = storeSessionStorage && JSON.parse(storeSessionStorage)
  console.log(storeSessionStorage)

  console.log(storeSessionStorageArr)
  const [nameField, setNameField] = useState('')
  const [emailField, setEmailField] = useState('');
  const [phoneField, setPhoneField] = useState('');
  const [textField, setTextField] = useState('');
  const [submited, setSubmited] = useState<boolean | null>(null)


  //just for DRY purpose

  const inputFieldsDataActionArray: setStateArray[] = [
    [nameField, setNameField, 'Name'],
    [emailField, setEmailField, 'Email'],
    [phoneField, setPhoneField, 'Phone'],
    [textField, setTextField, 'Message']
  ]


  function checkIsFieldValid(val: string, type: string) {
    if (type === 'Email') {
      return validateEmail(val)
    } else {
      return val !== ''
    }
  }
  function onSubmitHandler() {
    const areAllFieldsTrue = inputFieldsDataActionArray.map(item => checkIsFieldValid(item[0], item[2]))


    if (areAllFieldsTrue.includes(false)) {
      alert('All fields must be filled properly')
    } else {


      //Kad namestim backend
      fetchWithTimeout(
        sendFormData,
        {
          full_name: nameField,
          email: emailField,
          phone: phoneField,
          message: textField,
          shoes: storeSessionStorage
        },
        10000
      )
        .then(response => {
          console.log(response.status)
          if (response.status !== 200) {
            setSubmited(false)
            throw new Error(`${response.statusText}`)

          } else {
            console.log('asdsadasd')
            setSubmited(true)
            sessionStorage.clear();

          }
        })
        // .then(() => window.location.reload())
        .catch(e => {
          console.error(e)
        })
    }



  }

  const validateEmail = (email: string) => {
    let regularExpression = /^(([^.\s@]+(\.[^.\s@]+)*))@(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})$/;

    if (regularExpression.test(email)) {
      return true;
    }
    return false;
  }

  const sendFormData = (data: DataRequestShape) => fetch(`https://adminstore.freshpairstore.com/wp-json/freshpairstore/v1/my-forms`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

  async function onSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    onSubmitHandler()
  }


  useEffect(() => {
    inputFieldsDataActionArray.map(item => item[1](''))

  }, [submited])


  return (

    <>

      <CheckoutFormWrapper>
        <Form>
          <div>
            <h2>Send Request</h2>
            {inputFieldsDataActionArray.map((item, index) =>
              <InputFieldWrapper key={item[2]}>
                {
                  item[2] !== 'Message'
                    ?
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type={item[2]} name={item[2]} placeholder={item[2]} value={item[0]} onChange={(e) => item[1](e.target.value)} />
                      <Form.Text className="text-muted">
                      </Form.Text>
                    </Form.Group>
                    : <TextArea
                      value={item[0]}
                      onChange={(e) => item[1](e.target.value)}
                      placeholder={item[2]}
                      isError={false} />
                }
              </InputFieldWrapper>
            )}
          </div>
          <div>
            <CheckoutItems submited={submited} />
            <CtaButton isEnabled={true}
              onClick={(e) => onSubmit(e)}>Send Email</CtaButton>
          </div>
        </Form>

        {submited === true && <FormAlert>
          Form send sucessfully
          <img src={checkkmartPath} />
        </FormAlert>}
        {submited === false && <FormAlert>
          Error occured, please try again
          <img src={errorIconPath} />

        </FormAlert>}
      </CheckoutFormWrapper>
    </>
  )
}