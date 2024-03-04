import {styled} from 'styled-components'

export const ContactUsPageContainer = styled.div`
  background-color: #0a0a0a;
  min-height: 100vh;
`
export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ContactUsBannerBgContainer = styled.div`
  width: 100%;
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
export const ContactUsBannerHeading = styled.h1`
  color: #fff;
  font-family: 'Poiret One', 'sans serif';
  font-size: 40px;
  font-weight: 300;
  width: 90%;
  @media screen and (min-width: 768px) {
    font-size: 70px;
  }
`
export const ContactUsResponsiveContainer = styled.div`
  width: 90%;
`
export const ContactUsLocationImage = styled.img`
  width: 100%;
  height: 195px;
  margin-top: 40px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    height: 400px;
    margin-top: 64px;
    margin-bottom: 64px;
  }
`
export const ContactUsAddressAndForm = styled.div`
  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
`
export const ContactUsForm = styled.form`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 992px) {
    width: 65%;
  }
`
export const ContactUsFormHeading = styled.p`
  color: #ffffff;
  font-family: 'Poiret One', 'sans serif';
  margin: 0px;
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 20px;
`
export const ContactUsFormMessageContainer = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const ContactUsFormMessageInput = styled.textarea`
  color: #ffffff;
  background-color: transparent;
  border: 1px solid #ffffff;
  font-family: 'Jost', 'sans serif';
  font-weight: 300;
  font-size: 14px;
  padding: 6px 12px 6px 18px;
  margin: 0px;
  outline: none;
`
export const ContactUsFormLabel = styled.label`
  color: #ff0000;
  font-family: 'Jost', 'sans serif';
  font-weight: 300;
  margin: 0px;
  font-size: 14px;
  line-height: 1.2;
  margin-top: 5px;
`
export const ContactUsFormNameContainer = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 50%;
    padding-right: 10px;
  }
`
export const ContactUsFormNameInput = styled.input`
  color: #ffffff;
  background-color: transparent;
  border: 1px solid #ffffff;
  font-family: 'Jost', 'sans serif';
  font-weight: 300;
  font-size: 14px;
  padding: 6px 12px 6px 18px;
  height: 48px;
  margin: 0px;
  outline: none;
`
export const ContactUsFormEmailContainer = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 50%;
    padding-left: 10px;
  }
`
export const ContactUsFormEmailInput = styled.input`
  color: #ffffff;
  background-color: transparent;
  border: 1px solid #ffffff;
  font-family: 'Jost', 'sans serif';
  font-weight: 300;
  font-size: 14px;
  padding: 6px 12px 6px 18px;
  height: 48px;
  margin: 0px;
  outline: none;
`
export const ContactUsFormSubjectContainer = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const ContactUsFormSubjectInput = styled.input`
  color: #ffffff;
  background-color: transparent;
  border: 1px solid #ffffff;
  font-family: 'Jost', 'sans serif';
  font-weight: 300;
  font-size: 14px;
  padding: 6px 12px 6px 18px;
  height: 48px;
  margin: 0px;
  outline: none;
`
export const ContactUsFormSubmitBtn = styled.button`
  display: flex;
  align-items: center;
  color: #0a0a0a;
  background-color: #e5bf4a;
  font-family: 'Jost', sans-serif;
  font-size: 15px;
  border: 1px solid #e5bf4a;
  padding: 12px 34px;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    color: #e5bf4a;
    background-color: transparent;
  }
  @media screen and (min-width: 768px) {
    padding: 22px 41px;
  }
`
export const ContactUsContactOptionsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  margin: 25px 0px 0px 0px;
  @media screen and (min-width: 992px) {
    width: 25%;
    margin: 0px;
  }
`
export const ContactUsContactOptionsIconAndInfoContainer = styled.li`
  list-style-type: none;
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
`
export const ContactUsContactOptionsInfoContainer = styled.div`
  margin-left: 15px;
`
export const ContactUsContactOptionsInfoHeading = styled.p`
  color: #ffffff;
  font-family: 'Poiret One', 'sans serif';
  line-height: 1.5;
  margin: 0px;
`
export const ContactUsContactOptionsInfoDescription = styled.p`
  color: #ffffff;
  font-family: 'Jost', 'sans serif';
  line-height: 1.5;
  margin: 0px;
`
