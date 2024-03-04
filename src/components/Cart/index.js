import {useContext} from 'react'

import Header from '../Header'
import CartList from '../CartList'
import Footer from '../Footer'
import CartContext from '../../context/CartContext'

import {
  CartPageContainer,
  CartContainer,
  CartBannerBgContainer,
  CartBannerHeading,
  CartResponsiveContainer,
  CartRemoveAllBtn,
  CartListContainer,
  BillContainer,
  BillSubContainer,
  BillQtyAndHeadingContainer,
  BillHeading,
  BillQty,
  BillTotal,
  CartCheckoutBtn,
  EmptyCartContainer,
  EmptyCartImage,
  EmptyCartHeading,
  EmptyCartDescription,
} from './styledComponents'

const Cart = () => {
  const {cartList, removeAllCartItems} = useContext(CartContext)
  const cartItemsCount = cartList.length

  const onClickRemoveAll = () => {
    removeAllCartItems()
  }

  const renderCartPageBannerContainer = () => (
    <CartBannerBgContainer>
      <CartBannerHeading>My Cart</CartBannerHeading>
    </CartBannerBgContainer>
  )

  const renderCartItemsList = () => (
    <>
      <CartRemoveAllBtn onClick={onClickRemoveAll}>Remove All</CartRemoveAllBtn>
      <CartListContainer>
        {cartList.map(eachItem => (
          <CartList key={eachItem.id} cartDetails={eachItem} />
        ))}
      </CartListContainer>
    </>
  )

  const renderBillContainer = () => {
    let total = 0
    cartList.forEach(eachCartItem => {
      total += eachCartItem.price * eachCartItem.qty
    })
    return (
      <BillContainer>
        <BillSubContainer>
          <BillQtyAndHeadingContainer>
            <BillHeading>Order Total:</BillHeading>
            <BillQty>{`${cartItemsCount} Items in cart`}</BillQty>
          </BillQtyAndHeadingContainer>
          <BillTotal>{`Rs ${total}`}</BillTotal>
        </BillSubContainer>
        <CartCheckoutBtn>Checkout</CartCheckoutBtn>
      </BillContainer>
    )
  }

  const renderCartItemListAndBillContainer = () => (
    <>
      {renderCartItemsList()}
      {renderBillContainer()}
    </>
  )

  const renderEmptyCartContainer = () => (
    <EmptyCartContainer>
      <EmptyCartImage
        src="https://blogzine.webestica.com/assets/images/icon/empty-cart.svg"
        alt="empty-cart-image"
      />
      <EmptyCartHeading>Your Cart is Empty</EmptyCartHeading>
      <EmptyCartDescription>
        Looks like you haven&apos;t made your choice yet...
      </EmptyCartDescription>
    </EmptyCartContainer>
  )

  return (
    <CartPageContainer>
      <Header />
      <CartContainer>
        {renderCartPageBannerContainer()}
        <CartResponsiveContainer>
          {cartItemsCount === 0
            ? renderEmptyCartContainer()
            : renderCartItemListAndBillContainer()}
          <Footer />
        </CartResponsiveContainer>
      </CartContainer>
    </CartPageContainer>
  )
}
export default Cart
