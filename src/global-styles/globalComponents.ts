import { device } from './mediaQueries';
import styled from "styled-components";

export const Heading1 = styled.h1<{ hasMarginBottom?: boolean, hasDifferentFontSize?: boolean }>`
  margin: 0;
  margin-bottom: ${({ hasMarginBottom }) => hasMarginBottom ? '58px' : '0px'};
  font-family: 'billionDreams', cursive;
  font-style: normal;
  font-weight: 400;
  font-size: ${({ hasDifferentFontSize }) => hasDifferentFontSize ? '9.4vw' : '46px'};
  line-height: 54px;
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;

  @media ${device.tablet} {
    margin-bottom: ${({ hasMarginBottom }) => hasMarginBottom ? '78px' : '0px'};
    line-height: 76px;
  }
  @media ${device.tabletL} {
    font-size: 72px;
  }
  @media ${device.desktopS} {
    margin-bottom: ${({ hasMarginBottom }) => hasMarginBottom ? '58px' : '0px'};
  }
  @media ${device.desktopL} {
    margin-bottom: ${({ hasMarginBottom }) => hasMarginBottom ? '70px' : '0px'};
    font-size: 92px;
    line-height: 94px;
  }
`

export const Heading2 = styled.h2`
  margin: 0;
  font-family: 'billionDreams', cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 42px;
  color: ${({ theme }) => theme.colors.black};
  @media ${device.tablet} {
    font-size: 40px;
    line-height: 54px;
  }
  @media ${device.tabletL} {
    font-size: 46px;
    line-height: 62px;
  }
  @media ${device.desktopS} {
    font-size: 40px;
    line-height: 54px;
  }
  @media ${device.desktopL} {
    font-size: 46px;
    line-height: 62px;
  }
`

export const Heading3 = styled.h3`
  margin: 0;
  font-family: 'billionDreams', cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 38px;
  color: ${({ theme }) => theme.colors.black};
  @media ${device.tablet} {
    font-size: 30px;
    line-height: 48px;
  }
  @media ${device.tabletL} {
    font-size: 34px;
    line-height: 58px;
  }
  @media ${device.desktopS} {
    font-size: 30px;
    line-height: 48px;
  }
  @media ${device.desktopL} {
    font-size: 34px;
    line-height: 58px;
  }
`
export const Heading4 = styled.h4`
  margin: 0;
  font-family: 'billionDreams', cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 40px;
  color: ${({ theme }) => theme.colors.black};
  
  @media ${device.tabletL} {
    font-size: 26px;
    line-height: 42px;
  }
  @media ${device.desktopS} {
    font-size: 22px;
    line-height: 40px;
  }
  @media ${device.desktopL} {
    font-size: 26px;
    line-height: 42px;
  }
`
export const Heading5 = styled.h5`
  margin: 0;
  font-family: 'billionDreams', cursive;
  font-style: normal;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.black};
`
export const Heading6 = styled.h6`
  margin: 0;
  font-family: 'billionDreams', cursive;
  font-style: normal;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
`

export const BigPWrapper = styled.div`
  margin: 0;
  font-family: var(--regular);
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 34px;
  color: ${({ theme }) => theme.colors.darkGray};
`
export const SmallPWrapper = styled.div`
  margin: 0;
  font-family: var(--regular);
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.darkGray};
`

export const BigP = styled.p`
  margin: 0;
  font-family: var(--regular);
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 34px;
`

export const SmallP = styled.p`
  margin: 0;
  font-family: var(--regular);
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.darkGray};
`
export const SmallLink = styled.a`
  width: fit-content;
  font-size: 14px;
  line-height: 15px;
  font-family: var(--regular);
  font-weight: 400;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`

export const ContentWrapper = styled.div`
width: 100%;
padding: 0px 30px 0px 30px;
  @media ${device.tablet} {
    padding: 0px 50px 0px 50px;
  }
  @media ${device.tabletL} {
    padding: 0px 80px 0px 80px;
  }
  @media ${device.desktopS} {
    max-width: 960px;
    margin: 0 auto;
    padding: 0;
  }
  @media ${device.desktop} {
    max-width: 1024px;
  }
  @media ${device.desktopL} {
    max-width: 1180px;
  }
`

export const UppercaseLabel = styled.p<{ hasBiggerMarginBottom?: boolean }>`
margin-bottom: ${({ hasBiggerMarginBottom }) => hasBiggerMarginBottom ? '30px' : '20px'};
  font-family: var(--regular);
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.darkGray};

  @media ${device.tablet} {
    margin-bottom: ${({ hasBiggerMarginBottom }) => hasBiggerMarginBottom ? '40px' : '20px'};
  }
  @media ${device.tabletL} {
    margin-bottom: ${({ hasBiggerMarginBottom }) => hasBiggerMarginBottom ? '60px' : '30px'};
  }
  @media ${device.desktopS} {
    margin-bottom: ${({ hasBiggerMarginBottom }) => hasBiggerMarginBottom ? '40px' : '20px'};
  }
  @media ${device.desktop} {
    margin-bottom: ${({ hasBiggerMarginBottom }) => hasBiggerMarginBottom ? '40px' : '20px'};
  }
  @media ${device.desktopL} {
    margin-bottom: ${({ hasBiggerMarginBottom }) => hasBiggerMarginBottom ? '60px' : '30px'};
  }
`

export const ContactInfoP = styled.p`
  font-family: var(--regular);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.black};
`

export const GeneralButton = styled.div`
  width: 100%;
  @media ${device.tablet} {
    width: 223px;
  }
`


// We can use this styled component wherever we have a WYSIWYG editor
export const WYSIWYGWrapper = styled.div<{ isPrivacyPolicy?: boolean }>`

  h2 {
    margin: 0 0 24px 0;
    font-family: 'billionDreams', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 42px;
    color: ${({ theme }) => theme.colors.black};
    @media ${device.tablet} {
      font-size: 40px;
      line-height: 54px;
    }
    @media ${device.tabletL} {
      font-size: 46px;
      line-height: 62px;
    }
    @media ${device.desktopS} {
      font-size: 40px;
      line-height: 54px;
    }
    @media ${device.desktopL} {
      font-size: 46px;
      line-height: 62px;
    }
  }
  h3 {
    margin: 0 0 24px 0;
    font-family: 'billionDreams', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 38px;
    color: ${({ theme }) => theme.colors.black};
    @media ${device.tablet} {
      font-size: 30px;
      line-height: 48px;
    }
    @media ${device.tabletL} {
      font-size: 34px;
      line-height: 58px;
    }
    @media ${device.desktopS} {
      font-size: 30px;
      line-height: 48px;
    }
    @media ${device.desktopL} {
      font-size: 34px;
      line-height: 58px;
    }     
  }
  h4 {
    margin: 0 0 24px 0;
    font-family: 'billionDreams', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 40px;
    color: ${({ theme }) => theme.colors.black};
    
    @media ${device.tabletL} {
      font-size: 26px;
      line-height: 42px;
    }
    @media ${device.desktopS} {
      font-size: 22px;
      line-height: 40px;
    }
    @media ${device.desktopL} {
      font-size: 26px;
      line-height: 42px;
    }
  }
  h5 {
    margin: 0 0 24px 0;
    font-family: 'billionDreams', cursive;
    font-style: normal;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.colors.black};
  }
  h6 {
    margin: 0 0 24px 0;
    font-family: 'billionDreams', cursive;
    font-style: normal;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.colors.black};
    text-transform: uppercase;
  }
  p, a, ul, ol {
    font-family: var(--regular);
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 34px;
    color: ${({ theme }) => theme.colors.darkGray};
  }
  li {
    margin-bottom: ${({ isPrivacyPolicy }) => isPrivacyPolicy ? '20px' : '0'};;
  }
  a {
    margin: 0;
  }
  p {
    margin: ${({ isPrivacyPolicy }) => isPrivacyPolicy ? '0 0 60px 0' : '0'};
    @media ${device.tabletL} {
      margin: ${({ isPrivacyPolicy }) => isPrivacyPolicy ? '0 0 80px 0' : '0'};
    }
    @media ${device.desktopS} {
      margin: ${({ isPrivacyPolicy }) => isPrivacyPolicy ? '0 0 60px 0' : '0'};
    }
    @media ${device.desktopL} {
      margin: ${({ isPrivacyPolicy }) => isPrivacyPolicy ? '0 0 80px 0' : '0'};
    }
  }
  strong, b {
    font-family: var(--regular);
    font-weight: 700;
    font-style: normal;
  }
  p a {
    display: inline;
    margin: 0;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.darkGray};

    &:hover {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`