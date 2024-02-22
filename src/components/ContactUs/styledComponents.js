import {styled} from 'styled-components'

export const ContactUsPageContainer = styled.div`
  background-color: #0a0a0a;
  min-height: 100vh;
`
export const ContactUsPageMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ContactUsPageBannerBgContainer = styled.div`
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
export const ContactUsPageBannerHeading = styled.h1`
  color: #fff;
  font-family: 'Poiret One', 'sans serif';
  font-size: 40px;
  font-weight: 300;
  width: 90%;
  @media screen and (min-width: 768px) {
    font-size: 70px;
  }
`
export const ContactUsPageResponsiveContainer = styled.div`
  width: 90%;
`
export const ContactUsPageLocationImage = styled.img`
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
export const ContactUsPageAddressAndForm = styled.div`
  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
`
export const ContactUsPageForm = styled.form`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 992px) {
    width: 65%;
  }
`
export const ContactUsPageFormHeading = styled.p`
  color: #ffffff;
  font-family: 'Poiret One', 'sans serif';
  margin: 0px;
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 20px;
`
export const ContactUsPageFormMessageContainer = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const ContactUsPageFormMessageInput = styled.textarea`
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
export const ContactUsPageFormLabel = styled.label`
  color: #ff0000;
  font-family: 'Jost', 'sans serif';
  font-weight: 300;
  margin: 0px;
  font-size: 14px;
  line-height: 1.2;
  margin-top: 5px;
`
export const ContactUsPageFormNameContainer = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 50%;
    padding-right: 10px;
  }
`
export const ContactUsPageFormNameInput = styled.input`
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
export const ContactUsPageFormEmailContainer = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 50%;
    padding-left: 10px;
  }
`
export const ContactUsPageFormEmailInput = styled.input`
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
export const ContactUsPageFormSubjectContainer = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const ContactUsPageFormSubjectInput = styled.input`
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
export const ContactUsPageFormSubmitBtn = styled.button`
  display: flex;
  align-items: center;
  color: #0a0a0a;
  font-family: 'Jost', sans-serif;
  font-size: 15px;
  background-color: #e5bf4a;
  padding: 12px 34px;
  margin-top: 20px;
  border: none;
  cursor: pointer;
  &:hover {
    color: #e5bf4a;
    background-color: transparent;
    border: 1px solid #e5bf4a;
    transition: 300ms ease-out;
  }
  @media screen and (min-width: 768px) {
    padding: 22px 41px;
  }
`
export const ContactUsPageContactOptionsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  margin: 0px;
  margin-top: 25px;
  @media screen and (min-width: 992px) {
    width: 25%;
    margin: 0px;
  }
`
export const ContactUsPageContactOptionsIconAndInfoContainer = styled.li`
  list-style-type: none;
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
`
export const ContactUsPageContactOptionsInfoContainer = styled.div`
  margin-left: 15px;
`
export const ContactUsPageContactOptionsInfoHeading = styled.p`
  color: #ffffff;
  font-family: 'Poiret One', 'sans serif';
  line-height: 1.5;
  margin: 0px;
`
export const ContactUsPageContactOptionsInfoDescription = styled.p`
  color: #ffffff;
  font-family: 'Jost', 'sans serif';
  line-height: 1.5;
  margin: 0px;
`
