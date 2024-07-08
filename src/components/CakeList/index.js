import {useState} from 'react'
import {FaPlus, FaMinus} from 'react-icons/fa'

import {
  CakeListItem,
  CakeItemDetails,
  CakeImage,
  CakeName,
  CakeWeight,
  CakeItemDetailsAndAddCakeContainer,
  CakePriceAndDescription,
  CakeDescription,
  CakeDescriptionReadMoreBtn,
  CakePrice,
  AddCakeContainer,
  CakeQtyIncreaseAndDecreaseContainer,
  CakeQty,
  CakeQtyIncreaseAndDecreaseBtn,
  AddCakeToCartBtn,
} from './styledComponents'

const CakeList = props => {
  const {cakeDetails, onClickAddProduct, onIncrementQty, onDecrementQty} = props
  const [isBtnEnabled, setBtnAction] = useState(false)
  const [isReadMoreEnabled, setReadMore] = useState(false)
  const {id, name, description, imageUrl, price, qty, weight} = cakeDetails

  const onClickAddProductBtn = () => {
    onClickAddProduct(id)
    setBtnAction(true)
  }

  const onClickIncrementBtn = () => {
    onIncrementQty(id)
  }

  const onClickDecrementBtn = () => {
    onDecrementQty(id)
  }

  const onClickReadMore = () => setReadMore(prev => !prev)

  const descriptionLength = description.length

  const readMoreReadLess = isReadMoreEnabled
    ? description
    : description.slice(0, 100)

  const limitedDescription =
    descriptionLength > 100 ? readMoreReadLess : description

  const readMoreBtnValue = isReadMoreEnabled ? 'read less...' : ' read more...'

  const renderCakeDetailsContainer = () => (
    <CakePriceAndDescription>
      <CakeWeight>{`${weight}g (each)`}</CakeWeight>
      <CakeDescription>
        {limitedDescription}
        <CakeDescriptionReadMoreBtn
          visibility={descriptionLength > 100 ? 'inline-block' : 'none'}
          onClick={onClickReadMore}
        >
          {readMoreBtnValue}
        </CakeDescriptionReadMoreBtn>
      </CakeDescription>
      <CakePrice>{`₹ ${price * qty}`}</CakePrice>
    </CakePriceAndDescription>
  )

  const renderAddOrRemoveQtyContainer = () => (
    <CakeQtyIncreaseAndDecreaseContainer>
      <CakeQtyIncreaseAndDecreaseBtn
        type="button"
        onClick={onClickDecrementBtn}
        disabled={isBtnEnabled}
      >
        <FaMinus color="#e5bf4a" aria-label="plus" />
      </CakeQtyIncreaseAndDecreaseBtn>
      <CakeQty>{qty}</CakeQty>
      <CakeQtyIncreaseAndDecreaseBtn
        type="button"
        onClick={onClickIncrementBtn}
        disabled={isBtnEnabled}
      >
        <FaPlus color="#e5bf4a" aria-label="minus" />
      </CakeQtyIncreaseAndDecreaseBtn>
    </CakeQtyIncreaseAndDecreaseContainer>
  )

  return (
    <CakeListItem>
      <CakeImage src={imageUrl} alt={`${name}-image`} />
      <CakeItemDetails>
        <CakeName>{name}</CakeName>
        <CakeItemDetailsAndAddCakeContainer>
          {renderCakeDetailsContainer()}
          <AddCakeContainer>
            {renderAddOrRemoveQtyContainer()}
            <AddCakeToCartBtn
              type="button"
              onClick={onClickAddProductBtn}
              disabled={isBtnEnabled}
            >
              Add to cart
            </AddCakeToCartBtn>
          </AddCakeContainer>
        </CakeItemDetailsAndAddCakeContainer>
      </CakeItemDetails>
    </CakeListItem>
  )
}

export default CakeList
