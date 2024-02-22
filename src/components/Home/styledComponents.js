import {styled} from 'styled-components'

export const HomePageContainer = styled.div`
  background-color: #0a0a0a;
  min-height: 100vh;
`
export const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const HomeBannerBgContainer = styled.div`
  background-image: url('https://mrwallpaper.com/images/hd/black-forest-cupcake-2xvk9qlah3xhf476.jpg');
  background-size: cover;
  background-position: center;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    height: 600px;
  }
`
export const HomeBannerContainer = styled.div`
  width: 90%;
`
export const HomeBannerContainerHeading = styled.h1`
  color: #fff;
  font-family: 'Poiret One', 'sans serif';
  font-size: 32px;
  line-height: 1.2;
  font-weight: 300;
  margin: 0px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    font-size: 70px;
    width: 500px;
  }
`
export const HomeBannerContainerOrderNowBtn = styled.button`
  background-color: #e5bf4a;
  color: #0a0a0a;
  font-family: 'Jost', sans-serif;
  font-size: 15px;
  border: 1px solid #2a2a2a;
  padding: 12px 24px;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: #e5bf4a;
    border: 1px solid #e5bf4a;
  }
`
export const HomePageResponsiveContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const HomePageHighLightedCakeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`
export const HomePageHighLightedCakeMainHeading = styled.p`
  font-family: 'Poiret One', 'sans serif';
  color: #fff;
  text-align: center;
  font-size: 20px;
  line-height: 1.5;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const HomePageHighLightedCakeMainHeadingLine = styled.hr`
  border: 1px solid #e5bf4a;
  width: 100px;
  margin-top: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-top: 30px;
    margin-bottom: 45px;
  }
`
export const HomePageHighLightedCakeSubHeadingDescAndImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`
export const HomePageHighLightedCakeSubHeadingAndDescContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const HomePageHighLightedCakeSubHeading = styled.p`
  color: #e5bf4a;
  font-family: 'Poiret One', 'sans serif';
  font-size: 18px;
  margin: 0px;
  line-height: 1.5;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    width: 65%;
  }
`
export const HomePageHighLightedCakeDescription = styled.p`
  color: #fff;
  font-family: 'Jost', sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5;
  margin: 0px;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const HomePageHighLightedCakeImage = styled.img`
  width: 100%;
  margin-top: 15px;
  @media screen and (min-width: 768px) & (max-width: 992) {
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 992px) {
    width: 40%;
    margin-top: 0px;
    margin-left: 15px;
  }
`
export const CakeVideoContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 992px) {
    height: 668px;
  }
`

export const CakeVideoThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
`
