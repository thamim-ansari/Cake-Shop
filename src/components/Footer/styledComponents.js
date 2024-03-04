import {styled} from 'styled-components'

export const FooterContainer = styled.div`
  width: 100%;
  border-top: 1px solid #ffffff33;
  border-bottom: 1px solid #ffffff33;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0px;
  margin: 20px 0px;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    padding: 45px 0px 30px;
    margin: 40px 0px;
  }
`
export const FooterDescAndSocialIcons = styled.div`
  width: 100%;
  margin-bottom: 20px;
  @media screen and (min-width: 992px) {
    width: 500px;
  }
`
export const FooterDescription = styled.p`
  color: #ffffff;
  font-family: 'Jost', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`
export const FooterSocialIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const FooterSocialIconsBtn = styled.button`
  background-color: transparent;
  color: #ffffff;
  border: 1px solid #ffffff33;
  font-family: 'Jost', sans-serif;
  font-size: 16px;
  padding: 14px 36px;
  margin: 0px 4px 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #e5bf4a;
    border: 1px solid #e5bf4a;
  }
`
export const FooterSocialIconsBtnContainer = styled.span`
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FooterLocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`
export const FooterLocationHeading = styled.p`
  color: #e5bf4a;
  font-family: 'Poiret One', 'sans serif';
  font-size: 24px;
  margin: 20px 0px 10px 0px;
`
export const FooterLocationDescription = styled.p`
  color: #ffffff;
  font-family: 'Jost', 'sans serif';
  font-size: 16px;
  margin: 0px 0px 15px 0px;
`
export const FooterContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`
export const FooterContactHeading = styled.p`
  color: #e5bf4a;
  font-family: 'Poiret One', 'sans serif';
  font-size: 24px;
  margin: 20px 0px 10px;
`
export const FooterContactNumber = styled.p`
  color: #ffffff;
  font-family: 'Jost', 'sans serif';
  font-weight: 300;
  font-size: 16px;
  margin: 0px 0px 8px 0px;
`
export const FooterContactEmail = styled.p`
  color: #ffffff;
  font-family: 'Jost', 'sans serif';
  font-size: 16px;
  margin: 0px 0px 15px 0px;
`
