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
      <FollowUsImage
        src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/instra1.jpg"
        alt="follow-us-img-1"
      />
      <FollowUsImage
        src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/instra2.jpg"
        alt="follow-us-img-2"
      />
      <FollowUsImage
        src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/instra3.jpg"
        alt="follow-us-img-3"
      />
      <FollowUsImage
        src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/instra4.jpg"
        alt="follow-us-img-4"
      />
    </FollowUsImageContainer>
  </FollowUsContainer>
)

export default FollowUs
