import {styled} from 'styled-components'

export const CakesPageContainer = styled.div`
  background-color: #0a0a0a;
  min-height: 100vh;
`
export const CakesPageMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CakesPageBannerBgContainer = styled.div`
  background-image: url('https://mrwallpaper.com/images/hd/black-forest-cupcake-2xvk9qlah3xhf476.jpg');
  background-size: cover;
  background-position: center;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`
export const CakesPageBannerHeading = styled.h1`
  color: #fff;
  font-family: 'Poiret One', 'sans serif';
  font-size: 40px;
  font-weight: 300;
  width: 90%;
  @media screen and (min-width: 768px) {
    font-size: 70px;
  }
`
export const CakesPageResponsiveContainer = styled.div`
  width: 90%;
`
export const CakesPageListContainer = styled.ul`
  padding-left: 0px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`
