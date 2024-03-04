import {TiGroupOutline} from 'react-icons/ti'
import {HiOutlineCake} from 'react-icons/hi'
import {BiDish} from 'react-icons/bi'
import {FaHandHolding} from 'react-icons/fa'

import Header from '../Header'
import FollowUs from '../FollowUs'
import Footer from '../Footer'

import {
  AboutPageContainer,
  AboutContainer,
  AboutBannerBgContainer,
  AboutBannerHeading,
  AboutResponsiveContainer,
  AboutOurContainer,
  AboutOurContentContainer,
  AboutOurContentHeading,
  AboutOurContentDescription,
  AboutOurStoryImage,
  AboutOurTeamImage,
  AboutOurServicesContainer,
  AboutOurServicesHeading,
  AboutOurServiceList,
  AboutOurServiceListItems,
  AboutOurServiceListItemsHeading,
  AboutOurServiceListItemsDescription,
  AboutOurServiceDishIconContainer,
} from './styledComponents'
import './index.css'

const About = () => {
  const renderAboutPageBannerContainer = () => (
    <AboutBannerBgContainer>
      <AboutBannerHeading>About Us</AboutBannerHeading>
    </AboutBannerBgContainer>
  )

  const renderAboutOurStoryContainer = () => (
    <AboutOurContainer>
      <AboutOurStoryImage
        src="https://img.freepik.com/free-photo/male-chef-decorating-delicious-dessert-plate_23-2147863807.jpg?t=st=1709277449~exp=1709281049~hmac=c75d722e4af404f6a755d55d821b90e2a04d0ff43ca0529b460751083ee08a87&w=826"
        alt="our-story-cake-image"
      />
      <AboutOurContentContainer>
        <AboutOurContentHeading>About Our Story</AboutOurContentHeading>
        <AboutOurContentDescription>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
          quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
          laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
          augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
          rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
          semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
          blandit vel, luctus pulvinar,
        </AboutOurContentDescription>
      </AboutOurContentContainer>
    </AboutOurContainer>
  )

  const renderAboutOurServicesContainer = () => (
    <AboutOurServicesContainer>
      <AboutOurServicesHeading>Our Catering Services</AboutOurServicesHeading>
      <AboutOurServiceList>
        <AboutOurServiceListItems>
          <HiOutlineCake color="#e5bf4a" size={80} />
          <AboutOurServiceListItemsHeading>
            Birthday Party
          </AboutOurServiceListItemsHeading>
          <AboutOurServiceListItemsDescription>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </AboutOurServiceListItemsDescription>
        </AboutOurServiceListItems>
        <AboutOurServiceListItems>
          <TiGroupOutline color="#e5bf4a" size={80} />
          <AboutOurServiceListItemsHeading>
            Business Meetings
          </AboutOurServiceListItemsHeading>
          <AboutOurServiceListItemsDescription>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </AboutOurServiceListItemsDescription>
        </AboutOurServiceListItems>
        <AboutOurServiceListItems>
          <AboutOurServiceDishIconContainer>
            <BiDish color="#e5bf4a" size={80} className="dish-icon" />
            <FaHandHolding color="#e5bf4a" size={65} />
          </AboutOurServiceDishIconContainer>

          <AboutOurServiceListItemsHeading>
            Wedding Party
          </AboutOurServiceListItemsHeading>
          <AboutOurServiceListItemsDescription>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </AboutOurServiceListItemsDescription>
        </AboutOurServiceListItems>
      </AboutOurServiceList>
    </AboutOurServicesContainer>
  )

  const renderAboutOurTeamContainer = () => (
    <AboutOurContainer>
      <AboutOurTeamImage
        src="https://img.freepik.com/free-photo/close-up-chef-cooking-restaurant-kitchen_329181-16134.jpg?t=st=1709277747~exp=1709281347~hmac=da43346dc98bb987a3b6828e94893e5a4b750e21b188d7912a0167788f8a1771&w=826"
        alt="our-story-cake-image"
      />
      <AboutOurContentContainer>
        <AboutOurContentHeading>About Our Team</AboutOurContentHeading>
        <AboutOurContentDescription>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
          quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
          laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
          augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
          rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
          semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
          blandit vel, luctus pulvinar,
        </AboutOurContentDescription>
      </AboutOurContentContainer>
    </AboutOurContainer>
  )

  return (
    <AboutPageContainer>
      <Header />
      <AboutContainer>
        {renderAboutPageBannerContainer()}
        <AboutResponsiveContainer>
          {renderAboutOurStoryContainer()}
          {renderAboutOurServicesContainer()}
          {renderAboutOurTeamContainer()}
          <FollowUs />
          <Footer />
        </AboutResponsiveContainer>
      </AboutContainer>
    </AboutPageContainer>
  )
}

export default About
