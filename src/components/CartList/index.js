import {useContext} from 'react'
import {FaPlus, FaMinus} from 'react-icons/fa'
import CartContext from '../../context/CartContext'
import {
  CartItemsContainer,
  CartItemImage,
  CartItemNameAndPrice,
  CartItemName,
  CakeQtyIncreaseAndDecreaseContainer,
  CakeQty,
  CakeQtyIncreaseAndDecreaseBtn,
  CartItemPrice,
  CartItemRemoveBtn,
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
    <CartItemsContainer>
      <CartItemImage src={imageUrl} alt={`${name}-image}`} />
      <CartItemNameAndPrice>
        <CartItemName>{name}</CartItemName>
        <CakeQtyIncreaseAndDecreaseContainer>
          <CakeQtyIncreaseAndDecreaseBtn onClick={onClickDecreaseBtn}>
            <FaMinus color="#e5bf4a" />
          </CakeQtyIncreaseAndDecreaseBtn>
          <CakeQty>{qty}</CakeQty>
          <CakeQtyIncreaseAndDecreaseBtn onClick={onClickIncreaseBtn}>
            <FaPlus color="#e5bf4a" />
          </CakeQtyIncreaseAndDecreaseBtn>
        </CakeQtyIncreaseAndDecreaseContainer>
        <CartItemPrice>{`₹ ${price * qty}`}</CartItemPrice>
      </CartItemNameAndPrice>
      <CartItemRemoveBtn onClick={onClickRemoveBtn}>Remove</CartItemRemoveBtn>
    </CartItemsContainer>
  )
}

export default CartList
