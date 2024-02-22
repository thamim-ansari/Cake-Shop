import {useContext} from 'react'
import Header from '../Header'
import CartList from '../CartList'
import CartContext from '../../context/CartContext'

import {
  CartPageContainer,
  CartPageMainContainer,
  CartPageBannerBgContainer,
  CartPageBannerHeading,
  CartPageResponsiveContainer,
  CartPageItemsRemoveAllBtn,
  CartPageListContainer,
  CartPageItemsBillContainer,
  CartPageItemsBillHeading,
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

  return (
    <CartPageContainer>
      <Header />
      <CartPageMainContainer>
        <CartPageBannerBgContainer>
          <CartPageBannerHeading>My Cart</CartPageBannerHeading>
        </CartPageBannerBgContainer>
        <CartPageResponsiveContainer>
          <CartPageItemsRemoveAllBtn onClick={onClickRemoveAll}>
            Remove All
          </CartPageItemsRemoveAllBtn>
          <CartPageListContainer>
            {cartList.map(eachItem => (
              <CartList key={eachItem.id} cartDetails={eachItem} />
            ))}
          </CartPageListContainer>
          <CartPageItemsBillContainer>
            <CartPageItemsBillHeading>Order Total:</CartPageItemsBillHeading>
            <CartPageItemsBillHeading>{total}</CartPageItemsBillHeading>
            <CartPageItemsBillHeading>
              {cartItemsCount}
            </CartPageItemsBillHeading>
          </CartPageItemsBillContainer>
        </CartPageResponsiveContainer>
      </CartPageMainContainer>
    </CartPageContainer>
  )
}
export default Cart
