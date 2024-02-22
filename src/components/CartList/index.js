import {useContext} from 'react'
import {FaPlus, FaMinus} from 'react-icons/fa'
import CartContext from '../../context/CartContext'
import {
  CartPageItemsContainer,
  CartPageItemsImage,
  CartPageItemsNameAndPrice,
  CartPageItemsName,
  CakeQtyAddAndMinusContainer,
  CakeQty,
  CakeQtyAddAndMinusBtn,
  CartPageItemsPrice,
  CartPageItemsRemoveBtn,
} from './styledComponents'

const CartList = props => {
  const {cartDetails} = props
  const {id, name, imageUrl, price, qty} = cartDetails
  const {
    removeCartItem,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
  } = useContext(CartContext)
  const onClickRemoveBtn = () => {
    removeCartItem(id)
  }

  const onClickIncreaseBtn = () => {
    incrementCartItemQuantity(id)
  }
  const onClickDecreaseBtn = () => {
    decrementCartItemQuantity(id)
  }
  return (
    <CartPageItemsContainer>
      <CartPageItemsImage src={imageUrl} alt={`${name}-image}`} />
      <CartPageItemsNameAndPrice>
        <CartPageItemsName>{name}</CartPageItemsName>
        <CakeQtyAddAndMinusContainer>
          <CakeQtyAddAndMinusBtn onClick={onClickDecreaseBtn}>
            <FaMinus color="#e5bf4a" />
          </CakeQtyAddAndMinusBtn>
          <CakeQty>{qty}</CakeQty>
          <CakeQtyAddAndMinusBtn onClick={onClickIncreaseBtn}>
            <FaPlus color="#e5bf4a" />
          </CakeQtyAddAndMinusBtn>
        </CakeQtyAddAndMinusContainer>
        <CartPageItemsPrice>{`₹ ${price * qty}`}</CartPageItemsPrice>
      </CartPageItemsNameAndPrice>
      <CartPageItemsRemoveBtn onClick={onClickRemoveBtn}>
        Remove
      </CartPageItemsRemoveBtn>
    </CartPageItemsContainer>
  )
}

export default CartList
