import {styled} from 'styled-components'

export const FollowUsContainer = styled.div`
  width: 100%;
  margin-top: 25px;
  @media screen and (min-width: 768px) {
    margin-top: 45px;
  }
`
export const FollowUsHeadingAndBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 45px;
  @media screen and (min-width: 786px) {
    margin-bottom: 64px;
  }
`
export const FollowUsHeading = styled.p`
  color: #dfdfdf;
  font-family: 'Poiret One', cursive;
  font-size: 24px;
  margin: 0px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 45px;
  }
`
export const FollowUsBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e5bf4a;
  font-size: 15px;
  font-family: 'Jost', cursive;
  border: 1px solid #e5bf4a;
  background-color: transparent;
  padding: 14px 36px;
  cursor: pointer;
`
export const FollowUsIconContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`
export const FollowUsImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const FollowUsImage = styled.img`
  width: 100%;
  padding-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 50%;
    padding-bottom: 25px;
    padding-left: 10px;
    padding-right: 10px;
  }
  @media screen and (min-width: 992px) {
    width: 25%;
  }
`
