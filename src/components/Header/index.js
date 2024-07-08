import {useState} from 'react'
import {Link} from 'react-router-dom'

import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import {BsCart4} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'

import {
  NavBarContainer,
  LogoAndIconContainer,
  SocialIconsContainer,
  SocialIconsList,
  WebsiteLogoImage,
  CartIcon,
  NavBarContactUsBtn,
  WebsiteDesktopNavContainer,
  WebsiteDesktopNavListContainer,
  WebsiteDesktopNavList,
  WebsiteMobileNavContainer,
  MobileNavBarMenuBtnContainer,
  MobileNavBarMenuBtn,
  HamburgerMenuIcon,
  WebsiteMobileNavListContainer,
  WebsiteMobileNavList,
} from './styledComponents'
import './index.css'

const Header = () => {
  const [isMobileNavVisible, setMobileNavVisibility] = useState(false)
  const onClickMobileMenu = () => setMobileNavVisibility(prev => !prev)

  const renderSocialMediaContainer = () => (
    <SocialIconsContainer>
      <SocialIconsList>
        <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
          <FaFacebook
            size={20}
            className="nav-bar-icons"
            aria-label="facebook icon"
          />
        </a>
      </SocialIconsList>
      <SocialIconsList>
        <a href="https://www.instagram.com/" rel="noreferrer" target="_blank">
          <FaInstagram
            size={20}
            className="nav-bar-icons"
            aria-label="instagram icon"
          />
        </a>
      </SocialIconsList>
      <SocialIconsList>
        <a href="https://twitter.com" rel="noreferrer" target="_blank">
          <FaTwitter
            size={20}
            className="nav-bar-icons"
            aria-label="twitter icon"
          />
        </a>
      </SocialIconsList>
    </SocialIconsContainer>
  )

  const renderLogoAndCartContainer = () => (
    <LogoAndIconContainer>
      {renderSocialMediaContainer()}
      <Link to="/">
        <WebsiteLogoImage
          src="https://preview.colorlib.com/theme/cakeshop/assets/img/logo/logo.png.webp"
          alt="website-logo"
        />
      </Link>
      <Link to="/cart" className="link-style">
        <NavBarContactUsBtn>
          <CartIcon>
            <BsCart4 size={16} />
          </CartIcon>
          Cart
        </NavBarContactUsBtn>
      </Link>
    </LogoAndIconContainer>
  )

  const renderDesktopNavigationContainer = () => (
    <WebsiteDesktopNavContainer>
      <WebsiteDesktopNavListContainer>
        <Link to="/">
          <WebsiteDesktopNavList>Home</WebsiteDesktopNavList>
        </Link>
        <Link to="/cakes">
          <WebsiteDesktopNavList>Cakes</WebsiteDesktopNavList>
        </Link>
        <Link to="/about">
          <WebsiteDesktopNavList>About</WebsiteDesktopNavList>
        </Link>
        <Link to="/contact-us">
          <WebsiteDesktopNavList>Contact Us</WebsiteDesktopNavList>
        </Link>
      </WebsiteDesktopNavListContainer>
    </WebsiteDesktopNavContainer>
  )

  const renderMobileNavigationContainer = () => (
    <WebsiteMobileNavContainer>
      <MobileNavBarMenuBtnContainer>
        <MobileNavBarMenuBtn onClick={onClickMobileMenu}>
          MENU
          <HamburgerMenuIcon>
            <GiHamburgerMenu size={20} />
          </HamburgerMenuIcon>
        </MobileNavBarMenuBtn>
      </MobileNavBarMenuBtnContainer>
      <WebsiteMobileNavListContainer
        mobile={isMobileNavVisible ? 'block' : 'none'}
      >
        <Link to="/">
          <WebsiteMobileNavList>Home</WebsiteMobileNavList>
        </Link>
        <Link to="/cakes">
          <WebsiteMobileNavList>Cakes</WebsiteMobileNavList>
        </Link>
        <Link to="/about">
          <WebsiteMobileNavList>About</WebsiteMobileNavList>
        </Link>
        <Link to="/contact-us">
          <WebsiteMobileNavList>Contact Us</WebsiteMobileNavList>
        </Link>
      </WebsiteMobileNavListContainer>
    </WebsiteMobileNavContainer>
  )

  return (
    <NavBarContainer>
      {renderLogoAndCartContainer()}
      {renderDesktopNavigationContainer()}
      {renderMobileNavigationContainer()}
    </NavBarContainer>
  )
}

export default Header
