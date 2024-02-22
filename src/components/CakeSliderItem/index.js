import {
  CakeSliderItemContainer,
  CakeSliderItemName,
  CakeSliderItemImage,
  CakeSliderItemPrice,
} from './styledComponents'

const CakeSliderItem = props => {
  const {cakeDetails} = props
  const {name, imageUrl, price} = cakeDetails
  return (
    <CakeSliderItemContainer>
      <CakeSliderItemImage src={imageUrl} alt={`${name}-image`} />
      <CakeSliderItemName>{name}</CakeSliderItemName>
      <CakeSliderItemPrice>₹ {price}</CakeSliderItemPrice>
    </CakeSliderItemContainer>
  )
}

export default CakeSliderItem
