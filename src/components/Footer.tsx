import React from 'react'
import { FooterSection, PhoneNumber, EmailParagraph } from './Footer.styled'
import Logo from './Logo'
//@ts-ignore
import instaUrl from '../images/instagram-iconf.png';
import { ContentWrapper } from '../global-styles/globalComponents';
type Props = {}

export default function Footer({ }: Props) {
  return (
    <ContentWrapper>
      <FooterSection>
        <Logo />
        <PhoneNumber href="tel:+381123123">+381123123</PhoneNumber>
        <EmailParagraph href='mailto:freshpauir@gmail.com'>freshpauir@gmail.com</EmailParagraph>
        <img src={instaUrl} />
      </FooterSection>

    </ContentWrapper>
  )
}