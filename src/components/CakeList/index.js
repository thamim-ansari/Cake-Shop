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
  const {
    id,
    name,
    description,
    imageUrl,
    price,
    qty,
    type,
    weight,
  } = cakeDetails
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
  return (
    <CakeListItem>
      <CakeImage src={imageUrl} alt={`${name}-image`} />
      <CakeItemDetails>
        <CakeName>{name}</CakeName>
        <CakeItemDetailsAndOrderContainer>
          <CakePriceAndDescription>
            <CakeWeight>{`${weight}g (each)`}</CakeWeight>
            <CakeDescription>{description}</CakeDescription>
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
