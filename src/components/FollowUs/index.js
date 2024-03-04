import {FaInstagram} from 'react-icons/fa'

import {
  FollowUsContainer,
  FollowUsHeadingAndBtnContainer,
  FollowUsHeading,
  FollowUsBtn,
  FollowUsIconContainer,
  FollowUsImageContainer,
  FollowUsImage,
} from './styledComponents'
import '../Header/index.css'

const followUsImageList = [
  {
    id: 1,
    imageUrl:
      'https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/instra1.jpg',
  },
  {
    id: 2,
    imageUrl:
      'https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/instra2.jpg',
  },
  {
    id: 3,
    imageUrl:
      'https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/instra3.jpg',
  },
  {
    id: 4,
    imageUrl:
      'https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/instra4.jpg',
  },
]

const FollowUs = () => (
  <FollowUsContainer>
    <FollowUsHeadingAndBtnContainer>
      <FollowUsHeading>Follow us on Instagram</FollowUsHeading>
      <a
        href="https://www.instagram.com"
        rel="noreferrer"
        target="_blank"
        className="link-style"
      >
        <FollowUsBtn>
          <FollowUsIconContainer>
            <FaInstagram size={16} />
          </FollowUsIconContainer>
          Cakeshop
        </FollowUsBtn>
      </a>
    </FollowUsHeadingAndBtnContainer>
    <FollowUsImageContainer>
      {followUsImageList.map(eachImage => (
        <FollowUsImage
          src={eachImage.imageUrl}
          alt={`follow-us-img-${eachImage.id}`}
        />
      ))}
    </FollowUsImageContainer>
  </FollowUsContainer>
)

export default FollowUs
