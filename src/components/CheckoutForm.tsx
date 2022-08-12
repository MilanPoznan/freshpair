import React, { useState, useEffect } from 'react'
import { CheckoutFormWrapper, InputFieldWrapper, InputField, TextArea, SubmitFormBtn }
  from './CheckoutForm.styled'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

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

export const fetchWithTimeout = (fetchFunc: Function, data: any, timeout: number) => {
  return Promise.race([
    fetchFunc(data),
    new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), timeout))
  ]);
}
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
      const data = {
        full_name: nameField,
        email: emailField,
        phone: phoneField,
        text_field: textField
      }
      console.log(data)

      //Kad namestim backend
      // fetchWithTimeout(
      //   sendFormData,
      //   {
      //     full_name: nameField,
      //     email: emailField,
      //     phone: phoneField,
      //     text_field: textField
      //   },
      //   10000
      // )
    }



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

    onSubmitHandler()
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

    <>

      <CheckoutFormWrapper>
        <Form>
          {inputFieldsDataActionArray.map((item, index) =>
            <InputFieldWrapper key={item[2]}>
              {
                item[2] !== 'Message'
                  // ? <InputField
                  //   type={choseInputType(item[2])}
                  //   value={item[0]}
                  //   onChange={(e) => item[1](e.target.value)}
                  //   placeholder={item[2]}
                  //   isError={false} />
                  ?
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type={item[2]} placeholder={item[2]} value={item[0]} onChange={(e) => item[1](e.target.value)} />
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

          <Button
            onClick={(e) => onSubmit(e)}>Send Email</Button>


        </Form>
      </CheckoutFormWrapper>

    </>
  )
}