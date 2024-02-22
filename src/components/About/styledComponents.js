import {styled} from 'styled-components'

export const AboutPageContainer = styled.div`
  background-color: #0a0a0a;
  min-height: 100vh;
`
export const AboutPageMainContainer = styled.div`
  background-color: #0a0a0a;
`

export const AboutPageBannerBgContainer = styled.div`
  background-image: url('https://mrwallpaper.com/images/hd/black-forest-cupcake-2xvk9qlah3xhf476.jpg');
  background-size: cover;
  background-position: center;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`
export const AboutPageBannerHeading = styled.h1`
  color: #fff;
  font-family: 'Poiret One', 'sans serif';
  font-size: 40px;
  font-weight: 300;
  width: 90%;
  @media screen and (min-width: 768px) {
    font-size: 70px;
  }
`
