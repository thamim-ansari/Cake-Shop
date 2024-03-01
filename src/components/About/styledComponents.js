import {styled} from 'styled-components'

export const AboutPageContainer = styled.div`
  background-color: #0a0a0a;
  min-height: 100vh;
`
export const AboutPageMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AboutPageBannerBgContainer = styled.div`
  background-image: url('https://mrwallpaper.com/images/hd/black-forest-cupcake-2xvk9qlah3xhf476.jpg');
  background-size: cover;
  background-position: center;
  height: 250px;
  width: 100%;
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

export const AboutResponsiveContainer = styled.div`
  width: 90%;
  padding-top: 20px;
  @media screen and (min-width: 768px) {
    padding-top: 45px;
  }
`
export const AboutOurContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const AboutOurContentContainer = styled.div`
  color: #fff;
`
export const AboutOurContentHeading = styled.p`
  color: #e5bf4a;
  font-family: 'Poiret One', 'sans serif';
  font-size: 34px;
  font-weight: 600;
  margin: 0px;
  @media screen and (max-width: 768px) {
    margin: 10px 0px;
  }
  @media screen and (min-width: 768px) {
    font-size: 45px;
    margin-bottom: 20px;
  }
`
export const AboutOurContentDescription = styled.p`
  color: #fff;
  font-family: 'Jost', 'sans serif';
  font-size: 16px;
  line-height: 1.5;
  margin: 0px;
`
export const AboutOurStoryImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    order: 1;
    width: 550px;
    height: 365px;
    margin-left: 15px;
  }
`
export const AboutOurTeamImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    order: -1;
    width: 550px;
    height: 365px;
    margin-right: 15px;
  }
`
export const AboutOurServicesContainer = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px 10px 20px;
  margin: 20px 0px;
  @media screen and (min-width: 768px) {
    padding: 45px 64px;
    margin: 40px 0px;
  }
`
export const AboutOurServicesHeading = styled.p`
  color: #333333;
  font-family: 'Jost', 'sans serif';
  font-size: 45px;
  font-weight: 600;
  text-align: center;
  line-height: 1;
  margin: 0px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`
export const AboutOurServiceList = styled.ul`
  padding-left: 0px;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`
export const AboutOurServiceListItems = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-bottom: 25px;
  }
  @media screen and (min-width: 768px) {
    margin: 0px 10px;
  }
`
export const AboutOurServiceListItemsHeading = styled.p`
  color: #000000;
  font-family: 'Jost', 'sans serif';
  font-weight: 600;
  font-size: 24px;
  margin: 10px 0px;
`
export const AboutOurServiceListItemsDescription = styled.p`
  color: #666666;
  font-family: 'Jost', 'sans serif';
  font-size: 16px;
  margin: 0px;
  text-align: center;
`
export const AboutOurServiceDishIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 8px 0px;
`
