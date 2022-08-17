import React from 'react'
import { LinksWrapp, FooterSection, PhoneNumber, EmailParagraph, ContactLinkWrapper } from './Footer.styled'
import Logo from './Logo'
//@ts-ignore
import instaUrl from '../images/instaicon.jpeg';
import { ContentWrapper, SmallP } from '../global-styles/globalComponents';

type Props = {}

export default function Footer({ }: Props) {
  return (
    // <ContentWrapper>
    <FooterSection>
      <LinksWrapp>
        <ContactLinkWrapper>
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 24 24" >
            <path fill="#fff" d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M18.3,16c-0.7,1.8-2.6,2.8-4.5,2.1
	C10,16.7,7.3,14,5.9,10.2C5.2,8.3,6.2,6.4,8,5.7c0.4-0.1,0.8,0,0.9,0.3c0.4,0.8,0.9,1.5,1.3,2.3c0.2,0.4,0.2,0.8-0.1,1.1
	C9.8,9.9,9.4,10.3,9,10.7c0.8,1.9,2.4,3.5,4.2,4.2c0.4-0.4,0.8-0.7,1.2-1.1c0.3-0.3,0.8-0.3,1.1-0.1c0.8,0.4,1.5,0.9,2.3,1.3
	C18.3,15.2,18.4,15.6,18.3,16z"/>
          </svg>
          <PhoneNumber href="tel:+381123123">+381123123</PhoneNumber>
        </ContactLinkWrapper>

        <ContactLinkWrapper>

          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 24 24" >
            <path fill="#FFFFFF" d="M12,0C8.8,0,5.8,1.3,3.5,3.5C1.3,5.8,0,8.8,0,12s1.3,6.2,3.5,8.5C5.8,22.7,8.8,24,12,24s6.2-1.3,8.5-3.5
	c2.3-2.3,3.5-5.3,3.5-8.5s-1.3-6.2-3.5-8.5C18.2,1.3,15.2,0,12,0z M17.3,7.4L12,12.7L6.7,7.4L17.3,7.4L17.3,7.4z M6,8.1l3.5,3.5
	L6,15.9V8.1z M6.6,16.6l3.6-4.4l0.9,0.9l0.5,0.5v0c0.1,0.1,0.2,0.2,0.4,0.2c0.2,0,0.3-0.1,0.4-0.2l1.2-1.2l3.8,4.2L6.6,16.6
	L6.6,16.6z M18,15.9l-3.7-4.1L18,8.1V15.9z"/>
          </svg>
          <EmailParagraph href="mailto:freshpauir@gmail.com">freshpauir@gmail.com</EmailParagraph>
        </ContactLinkWrapper>
        <ContactLinkWrapper>
          <img src={instaUrl} />
          <a href="https://www.instagram.com/freshpair_store/?hl=en" target="__blank">
            @freshpair_store
          </a>

        </ContactLinkWrapper>
      </LinksWrapp>



      <SmallP>COPYRIGHT © 2022 FRESHPAIR. ALL RIGHTS RESERVED.</SmallP>
    </FooterSection>

    // </ContentWrapper>
  )
}