import {styled} from 'styled-components'

export const NavBarContainer = styled.nav`
  background-color: #0a0a0a;
`
export const LogoAndIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`
export const SocialIconsContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const SocialIconsList = styled.li`
  list-style-type: none;
  padding-right: 19px;
`
export const WebsiteLogoImage = styled.img`
  width: 200px;
`
export const CartIcon = styled.span`
  margin-right: 3px;
  margin-top: 3px;
`
export const NavBarContactUsBtn = styled.button`
  display: flex;
  align-items: center;
  color: #e5bf4a;
  font-family: 'Jost', sans-serif;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid #e5bf4a;
  line-height: 1.5;
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #e5bf4a;
    transform: scale(1.1);
    transition: 200ms ease-in-out;
  }
`
export const WebsiteDesktopNavContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const WebsiteDesktopNavListContainer = styled.ul`
  padding-left: 0px;
  display: flex;
`
export const WebsiteDesktopNavList = styled.li`
  display: inline-block;
  position: relative;
  font-family: 'Jost', sans-serif;
  list-style-type: none;
  color: #fff;
  font-size: 18px;
  margin-right: 15px;
  margin-left: 15px;
  line-height: 1.5;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #e5bf4a;
    transform-origin: bottom left;
    transition: transform 400ms ease-out;
  }
  &:hover {
    color: #e5bf4a;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`
export const WebsiteMobileNavContainer = styled.div`
  background-color: #4c4c4c;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const MobileNavBarMenuBtnContainer = styled.div`
  display: flex;
  justify-content: end;
`
export const MobileNavBarMenuBtn = styled.button`
  color: #fff;
  font-family: 'Jost', sans-serif;
  font-size: 16px;
  font-weight: 600;
  background-color: #222;
  border-radius: 4px;
  padding: 6px 12px;
  margin: 10px;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
`
export const HamburgerMenuIcon = styled.span`
  margin-left: 5px;
  display: flex;
`
export const WebsiteMobileNavListContainer = styled.ul`
  display: ${props => props.mobile} !important;
  background-color: #4c4c4c;
  padding: 0px 20px 5px 20px;
  display: flex;
  flex-direction: column;
  margin: 0px;
`
export const WebsiteMobileNavList = styled.li`
  list-style-type: none;
  font-family: 'Jost', sans-serif;
  margin-bottom: 15px;
  font-size: 14px;
  color: #fff;
`
