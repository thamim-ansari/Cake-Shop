import {useState} from 'react'
import {FaPlus, FaMinus} from 'react-icons/fa'

import {
  CakeListItem,
  CakeItemDetails,
  CakeImage,
  CakeName,
  CakeWeight,
  CakeItemDetailsAndOrderContainer,
  CakePriceAndDescription,
  CakeDescription,
  CakeDescriptionReadMoreBtn,
  CakePrice,
  CakeOrderContainer,
  CakeQtyAddAndMinusContainer,
  CakeQty,
  CakeQtyAddAndMinusBtn,
  CakeAddToCartBtn,
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

  return (
    <CakeListItem>
      <CakeImage src={imageUrl} alt={`${name}-image`} />
      <CakeItemDetails>
        <CakeName>{name}</CakeName>
        <CakeItemDetailsAndOrderContainer>
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
          <CakeOrderContainer>
            <CakeQtyAddAndMinusContainer>
              <CakeQtyAddAndMinusBtn
                type="button"
                onClick={onClickDecrementBtn}
                disabled={isBtnEnabled}
              >
                <FaMinus color="#e5bf4a" />
              </CakeQtyAddAndMinusBtn>
              <CakeQty>{qty}</CakeQty>
              <CakeQtyAddAndMinusBtn
                type="button"
                onClick={onClickIncrementBtn}
                disabled={isBtnEnabled}
              >
                <FaPlus color="#e5bf4a" />
              </CakeQtyAddAndMinusBtn>
            </CakeQtyAddAndMinusContainer>
            <CakeAddToCartBtn
              type="button"
              onClick={onClickAddProductBtn}
              disabled={isBtnEnabled}
            >
              Add to cart
            </CakeAddToCartBtn>
          </CakeOrderContainer>
        </CakeItemDetailsAndOrderContainer>
      </CakeItemDetails>
    </CakeListItem>
  )
}

export default CakeList
