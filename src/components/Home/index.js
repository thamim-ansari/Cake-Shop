import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player'

import Header from '../Header'
import CakeSlider from '../CakeSlider'
import FollowUs from '../FollowUs'
import Footer from '../Footer'

import {
  HomePageContainer,
  HomeContainer,
  HomeBannerBgContainer,
  HomeBannerContainer,
  HomeBannerHeading,
  HomeOrderNowBtn,
  HomeResponsiveContainer,
  HomeHighlightedCakeContainer,
  HomeHighlightedCakeHeading,
  HomeHighlightedCakeHeadingUnderline,
  HomeHighlightedCakeContentAndImageContainer,
  HomePageHighlightedCakeContentContainer,
  HomeHighlightedCakeSubHeading,
  HomeHighlightedCakeDescription,
  HomeHighlightedCakeImage,
  HomeCakeVideoContainer,
  HomeCakeVideoThumbnailImage,
} from './styledComponents'

const Home = () => {
  const renderHomeBannerContainer = () => (
    <HomeBannerBgContainer>
      <HomeBannerContainer>
        <HomeBannerHeading>Healthy Made Delicious Cake</HomeBannerHeading>
        <Link to="/cakes">
          <HomeOrderNowBtn>ORDER NOW</HomeOrderNowBtn>
        </Link>
      </HomeBannerContainer>
    </HomeBannerBgContainer>
  )

  const renderHighlightedCakeContainer = () => (
    <HomeHighlightedCakeContainer>
      <HomeHighlightedCakeHeading>
        This is Rainbow Cake. Awesome Looking and Tasting Cake.
        <br /> Order now and have a Bite.
      </HomeHighlightedCakeHeading>
      <HomeHighlightedCakeHeadingUnderline />
      <HomeHighlightedCakeContentAndImageContainer>
        <HomePageHighlightedCakeContentContainer>
          <HomeHighlightedCakeSubHeading>
            The Rainbow cake a three-layered almond flavored Italian-American
            Cake.
          </HomeHighlightedCakeSubHeading>
          <HomeHighlightedCakeDescription>
            This beautiful Rainbow Cake is perfect for any occasion, from
            birthday parties to holidays! It’s always a crowd-pleaser as you cut
            into it, revealing six stunning colorful layers with buttercream
            throughout. It’s moist, flavorful, and absolutely show-stopping.If
            you want to see everyone’s faces light up when you cut into a cake,
            then you must try this rainbow cake!.
          </HomeHighlightedCakeDescription>
          <HomeHighlightedCakeDescription>
            It’s positively stunning with all the colors of the rainbow
            including purple, blue, green, yellow, orange, and red layers with
            white buttercream between each layer. It is such a festive cake that
            tastes just as good as it looks!.The cake is moist, tender, and has
            a sweet vanilla flavor throughout. It pairs wonderfully with the
            smooth buttercream icing, and topped with some rainbow sprinkles to
            give everyone a hint of what’s inside. It’s truly an impressive cake
            that’s fun for all ages.
          </HomeHighlightedCakeDescription>
        </HomePageHighlightedCakeContentContainer>
        <HomeHighlightedCakeImage
          src="https://thecakesolution.co.uk/wp-content/uploads/2023/12/Rainbow-1-scaled.jpg"
          alt="rainbow-cake-img"
        />
      </HomeHighlightedCakeContentAndImageContainer>
    </HomeHighlightedCakeContainer>
  )

  const renderVideoPlayer = () => (
    <HomeCakeVideoContainer>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=uBqBHsoMd08}"
        controls
        light={
          <HomeCakeVideoThumbnailImage
            src="https://www.mashed.com/img/gallery/use-frosting-as-sugary-glue-to-fix-broken-cakes-in-a-snap/l-intro-1689143819.jpg"
            alt="cake-making-video"
          />
        }
        width="100%"
        height="100%"
      />
    </HomeCakeVideoContainer>
  )

  return (
    <HomePageContainer>
      <Header />
      <HomeContainer>
        {renderHomeBannerContainer()}
        <HomeResponsiveContainer>
          {renderHighlightedCakeContainer()}
          <CakeSlider />
          {renderVideoPlayer()}
          <FollowUs />
          <Footer />
        </HomeResponsiveContainer>
      </HomeContainer>
    </HomePageContainer>
  )
}

export default Home
