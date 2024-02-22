import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player'

import Header from '../Header'
import CakeSlider from '../CakeSlider'
import FollowUs from '../FollowUs'
import Footer from '../Footer'

import {
  HomePageContainer,
  HomeMainContainer,
  HomeBannerBgContainer,
  HomeBannerContainer,
  HomeBannerContainerHeading,
  HomeBannerContainerOrderNowBtn,
  HomePageResponsiveContainer,
  HomePageHighLightedCakeContainer,
  HomePageHighLightedCakeMainHeading,
  HomePageHighLightedCakeMainHeadingLine,
  HomePageHighLightedCakeSubHeadingDescAndImageContainer,
  HomePageHighLightedCakeSubHeadingAndDescContainer,
  HomePageHighLightedCakeSubHeading,
  HomePageHighLightedCakeDescription,
  HomePageHighLightedCakeImage,
  CakeVideoContainer,
  CakeVideoThumbnailImage,
} from './styledComponents'

const Home = () => {
  const renderHomeBannerContainer = () => (
    <HomeBannerBgContainer>
      <HomeBannerContainer>
        <HomeBannerContainerHeading>
          Healthy Made Delicious Cake
        </HomeBannerContainerHeading>
        <Link to="/cakes">
          <HomeBannerContainerOrderNowBtn>
            ORDER NOW
          </HomeBannerContainerOrderNowBtn>
        </Link>
      </HomeBannerContainer>
    </HomeBannerBgContainer>
  )

  const renderHighlightedCakeContainer = () => (
    <HomePageHighLightedCakeContainer>
      <HomePageHighLightedCakeMainHeading>
        This is Rainbow Cake. Awesome Looking and Tasting Cake.
        <br /> Order now and have a Bite.
      </HomePageHighLightedCakeMainHeading>
      <HomePageHighLightedCakeMainHeadingLine />
      <HomePageHighLightedCakeSubHeadingDescAndImageContainer>
        <HomePageHighLightedCakeSubHeadingAndDescContainer>
          <HomePageHighLightedCakeSubHeading>
            The Rainbow cake a three-layered almond flavored Italian-American
            Cake.
          </HomePageHighLightedCakeSubHeading>
          <HomePageHighLightedCakeDescription>
            This beautiful Rainbow Cake is perfect for any occasion, from
            birthday parties to holidays! It’s always a crowd-pleaser as you cut
            into it, revealing six stunning colorful layers with buttercream
            throughout. It’s moist, flavorful, and absolutely show-stopping.If
            you want to see everyone’s faces light up when you cut into a cake,
            then you must try this rainbow cake!.
          </HomePageHighLightedCakeDescription>
          <HomePageHighLightedCakeDescription>
            It’s positively stunning with all the colors of the rainbow
            including purple, blue, green, yellow, orange, and red layers with
            white buttercream between each layer. It is such a festive cake that
            tastes just as good as it looks!.The cake is moist, tender, and has
            a sweet vanilla flavor throughout. It pairs wonderfully with the
            smooth buttercream icing, and topped with some rainbow sprinkles to
            give everyone a hint of what’s inside. It’s truly an impressive cake
            that’s fun for all ages.
          </HomePageHighLightedCakeDescription>
        </HomePageHighLightedCakeSubHeadingAndDescContainer>
        <HomePageHighLightedCakeImage
          src="https://thecakesolution.co.uk/wp-content/uploads/2023/12/Rainbow-1-scaled.jpg"
          alt="rainbow-cake-img"
        />
      </HomePageHighLightedCakeSubHeadingDescAndImageContainer>
    </HomePageHighLightedCakeContainer>
  )

  const renderVideoPlayer = () => (
    <CakeVideoContainer>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=uBqBHsoMd08}"
        controls
        light={
          <CakeVideoThumbnailImage
            src="https://www.mashed.com/img/gallery/use-frosting-as-sugary-glue-to-fix-broken-cakes-in-a-snap/l-intro-1689143819.jpg"
            alt="cake-making-video"
          />
        }
        width="100%"
        height="100%"
      />
    </CakeVideoContainer>
  )

  return (
    <HomePageContainer>
      <Header />
      <HomeMainContainer>
        {renderHomeBannerContainer()}
        <HomePageResponsiveContainer>
          {renderHighlightedCakeContainer()}
          <CakeSlider />
          {renderVideoPlayer()}
          <FollowUs />
          <Footer />
        </HomePageResponsiveContainer>
      </HomeMainContainer>
    </HomePageContainer>
  )
}

export default Home
