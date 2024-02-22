import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLocationArrow,
  FaPhoneAlt,
} from 'react-icons/fa'

import {
  FooterContainer,
  FooterDescAndSocialIcons,
  FooterDescription,
  FooterSocialIcons,
  FooterSocialIconsBtn,
  FooterSocialIconsBtnContainer,
  FooterLocationContainer,
  FooterLocationHeading,
  FooterLocationDescription,
  FooterContactContainer,
  FooterContactHeading,
  FooterContactNumber,
  FooterContactEmail,
} from './styledComponents'

const Footer = () => (
  <FooterContainer>
    <FooterDescAndSocialIcons>
      <FooterDescription>
        Thanks for visiting our site. You can follow updates through our social
        media handles about the latest launches and discounts. Feel free to
        Follow us on the social media handles below.
      </FooterDescription>
      <FooterSocialIcons>
        <FooterSocialIconsBtn>
          <FooterSocialIconsBtnContainer>
            <FaInstagram size={16} />
          </FooterSocialIconsBtnContainer>
          Instagram
        </FooterSocialIconsBtn>
        <FooterSocialIconsBtn>
          <FooterSocialIconsBtnContainer>
            <FaFacebook size={16} />
          </FooterSocialIconsBtnContainer>
          Facebook
        </FooterSocialIconsBtn>
        <FooterSocialIconsBtn>
          <FooterSocialIconsBtnContainer>
            <FaTwitter size={16} />
          </FooterSocialIconsBtnContainer>
          Twitter
        </FooterSocialIconsBtn>
      </FooterSocialIcons>
    </FooterDescAndSocialIcons>
    <FooterLocationContainer>
      <FaLocationArrow size={25} color="#DFDFDF" />
      <FooterLocationHeading>Location</FooterLocationHeading>
      <FooterLocationDescription>
        4736 Poe Lane, HOT SPRINGS, Montana-59845
      </FooterLocationDescription>
    </FooterLocationContainer>
    <FooterContactContainer>
      <FaPhoneAlt size={25} color="#DFDFDF" />
      <FooterContactHeading>Contact</FooterContactHeading>
      <FooterContactNumber>913-473-7000</FooterContactNumber>
      <FooterContactEmail>contact@cakeshop.com</FooterContactEmail>
    </FooterContactContainer>
  </FooterContainer>
)

export default Footer
