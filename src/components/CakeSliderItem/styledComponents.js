import {styled} from 'styled-components'

export const CakeSliderItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`

export const CakeSliderItemName = styled.p`
  color: #fff;
  font-family: 'Poiret One', 'sans serif';
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const CakeSliderItemImage = styled.img`
  width: 100%;
`
export const CakeSliderItemPrice = styled.p`
  color: #e5bf4a;
  font-family: 'Jost', 'sans serif';
  font-weight: 300;
  font-size: 20px;
  margin: 0px;
`
