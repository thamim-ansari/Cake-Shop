import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import CakeSliderItem from '../CakeSliderItem'

import './index.css'

const cakeSlideData = [
  {
    id: 1,
    name: 'Flourless orange cake',
    imageUrl:
      'https://img.taste.com.au/yWS4_iYa/taste/2016/11/top-50-cakes-image-7-66323-1.jpg',
    price: '500',
  },
  {
    id: 2,
    name: 'Chocolate coconut cake',
    imageUrl:
      'https://img.taste.com.au/PHgEErSh/taste/2016/11/top-50-cakes-image-3-66317-1.jpg',
    price: '400',
  },
  {
    id: 3,
    name: 'Raspberry and almond cake',
    imageUrl:
      'https://img.taste.com.au/-dGYc9Ej/taste/2016/11/top-50-cakes-image-49-66387-1.jpg',
    price: '500',
  },
  {
    id: 4,
    name: 'Chocolate mud cupcakes',
    imageUrl:
      'https://img.taste.com.au/a1EjasDr/taste/2016/11/top-50-cakes-image-6-66322-1.jpg',
    price: '150',
  },
]

const CakeSlider = () => {
  const PrevArrow = props => (
    <button {...props} className="custom-prev-arrow" type="button">
      &lt;
    </button>
  )

  const NextArrow = props => (
    <button {...props} className="custom-next-arrow" type="button">
      &gt;
    </button>
  )

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  }

  return (
    <div className="slider-container">
      <Slider {...settings} className="custom-slider-container">
        {cakeSlideData.map(eachData => (
          <CakeSliderItem key={eachData.id} cakeDetails={eachData} />
        ))}
      </Slider>
    </div>
  )
}

export default CakeSlider
