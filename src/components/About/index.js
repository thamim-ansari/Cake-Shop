import Header from '../Header'
import {
  AboutPageContainer,
  AboutPageMainContainer,
  AboutPageBannerBgContainer,
  AboutPageBannerHeading,
} from './styledComponents'

const About = () => {
  const renderAboutPageBannerContainer = () => (
    <AboutPageBannerBgContainer>
      <AboutPageBannerHeading>About Us</AboutPageBannerHeading>
    </AboutPageBannerBgContainer>
  )
  return (
    <AboutPageContainer>
      <Header />
      <AboutPageMainContainer>
        {renderAboutPageBannerContainer()}
      </AboutPageMainContainer>
    </AboutPageContainer>
  )
}

export default About
