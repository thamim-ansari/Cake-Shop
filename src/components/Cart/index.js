import {useContext} from 'react'

import Header from '../Header'
import CartList from '../CartList'
import Footer from '../Footer'
import CartContext from '../../context/CartContext'

import {
  CartPageContainer,
  CartPageMainContainer,
  CartPageBannerBgContainer,
  CartPageBannerHeading,
  CartPageResponsiveContainer,
  CartPageItemsRemoveAllBtn,
  CartPageListContainer,
  CartPageBillContainer,
  CartPageBillSubContainer,
  CartPageBillQtyAndHeadingContainer,
  CartPageBillHeading,
  CartPageBillQty,
  CartPageBillTotal,
  CartPageCheckoutBtn,
  CartPageEmptyCartContainer,
  CartPageEmptyCartImage,
  CartPageEmptyCartHeading,
  CartPageEmptyCartDescription,
} from './styledComponents'

const Cart = () => {
  const {cartList, removeAllCartItems} = useContext(CartContext)

  const onClickRemoveAll = () => {
    removeAllCartItems()
  }

  const cartItemsCount = cartList.length

  let total = 0
  cartList.forEach(eachCartItem => {
    total += eachCartItem.price * eachCartItem.qty
  })

  const renderBillContainer = () => (
    <CartPageBillContainer>
      <CartPageBillSubContainer>
        <CartPageBillQtyAndHeadingContainer>
          <CartPageBillHeading>Order Total:</CartPageBillHeading>
          <CartPageBillQty>{`${cartItemsCount} Items in cart`}</CartPageBillQty>
        </CartPageBillQtyAndHeadingContainer>
        <CartPageBillTotal>{`Rs ${total}`}</CartPageBillTotal>
      </CartPageBillSubContainer>
      <CartPageCheckoutBtn>Checkout</CartPageCheckoutBtn>
    </CartPageBillContainer>
  )
  const renderCartItemsList = () => (
    <>
      <CartPageItemsRemoveAllBtn onClick={onClickRemoveAll}>
        Remove All
      </CartPageItemsRemoveAllBtn>
      <CartPageListContainer>
        {cartList.map(eachItem => (
          <CartList key={eachItem.id} cartDetails={eachItem} />
        ))}
      </CartPageListContainer>
    </>
  )
  const renderCartItemListAndBillContainer = () => (
    <>
      {renderCartItemsList()}
      {renderBillContainer()}
    </>
  )
  const renderEmptyCartContainer = () => (
    <CartPageEmptyCartContainer>
      <CartPageEmptyCartImage
        src="https://blogzine.webestica.com/assets/images/icon/empty-cart.svg"
        alt="empty-cart-image"
      />
      <CartPageEmptyCartHeading>Your Cart is Empty</CartPageEmptyCartHeading>
      <CartPageEmptyCartDescription>
        Looks like you haven&apos;t made your choice yet...
      </CartPageEmptyCartDescription>
    </CartPageEmptyCartContainer>
  )

  return (
    <CartPageContainer>
      <Header />
      <CartPageMainContainer>
        <CartPageBannerBgContainer>
          <CartPageBannerHeading>My Cart</CartPageBannerHeading>
        </CartPageBannerBgContainer>
        <CartPageResponsiveContainer>
          {cartItemsCount === 0
            ? renderEmptyCartContainer()
            : renderCartItemListAndBillContainer()}
          <Footer />
        </CartPageResponsiveContainer>
      </CartPageMainContainer>
    </CartPageContainer>
  )
}
export default Cart
