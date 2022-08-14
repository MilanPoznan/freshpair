import React from 'react'
import styled from 'styled-components'
import { device } from '../global-styles/mediaQueries'
import { ContentWrapper, WYSIWYGWrapper } from '../global-styles/globalComponents'
type Props = {
  content: string
}

export const AboutUsWrapper = styled.div`
  text-align: center;
  padding: 40px 0;
  h2 {
    margin-bottom: 20px;
  }
  @media ${device.desktopS} {
    padding: 100px 0;

    max-width: 75%;
    margin: 0 auto;
  }
`

export default function AboutUs({ content }: Props) {
  return (
    <ContentWrapper>
      <AboutUsWrapper>
        <h2>About Us</h2>
        <WYSIWYGWrapper dangerouslySetInnerHTML={{ __html: content }} />
      </AboutUsWrapper>
    </ContentWrapper>
  )
}