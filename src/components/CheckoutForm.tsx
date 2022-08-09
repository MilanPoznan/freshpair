import React, { useState, useEffect } from 'react'
import { CheckoutFormWrapper, InputFieldWrapper, InputField, TextArea, SubmitFormBtn }
  from './CheckoutForm.styled'
type Props = {}

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

export default function CheckoutForm({ }: Props) {




  const [nameField, setNameField] = useState('')
  const [emailField, setEmailField] = useState('');
  const [phoneField, setPhoneField] = useState('');
  const [textField, setTextField] = useState('');
  const [submited, setSubmited] = useState(false)


  //just for DRY purpose

  const inputFieldsDataActionArray: setStateArray[] = [
    [nameField, setNameField, 'Name'],
    [emailField, setEmailField, 'Email'],
    [phoneField, setPhoneField, 'Phone'],
    [textField, setTextField, 'Message']
  ]


  function checkIsFieldValid(val: string, type: string) {
    if (type === 'Email') {
      validateEmail(val)
    } else {

    }
  }
  function onSubmitHandler() {
    inputFieldsDataActionArray.forEach(item => {
      item
    })
  }

  const validateEmail = (email: string) => {
    let regularExpression = /^(([^.\s@]+(\.[^.\s@]+)*))@(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})$/;

    if (regularExpression.test(email)) {
      return true;
    }
    return false;
  }

  const sendFormData = (data: DataRequestShape) => fetch(``, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

  async function onSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setSubmited(true)
  }

  function choseInputType(field: string) {
    switch (field) {
      case 'Email':
        return 'email'
      default:
        return 'text'
    }
  }
  return (
    <CheckoutFormWrapper>
      {inputFieldsDataActionArray.map((item, index) =>
        <InputFieldWrapper key={item[2]}>
          {
            item[2] !== 'Message'
              ? <InputField
                type={choseInputType(item[2])}
                value={item[0]}
                onChange={(e) => item[1](e.target.value)}
                placeholder={item[2]}
                isError={false} />
              : <TextArea
                value={item[0]}
                onChange={(e) => item[1](e.target.value)}
                placeholder={item[2]}
                isError={false} />
          }
        </InputFieldWrapper>
      )}

      <SubmitFormBtn
        onClick={(e) => onSubmit(e)}>Send Email</SubmitFormBtn>

    </CheckoutFormWrapper>

  )
}