import {useState} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Cakes from './components/Cakes'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import GoToTopButton from './components/GoToTopButton'
import CartContext from './context/CartContext'

const App = () => {
  const [cartList, addCartData] = useState([])

  const onAddCartItem = cake => {
    const existingCakeIndex = cartList.findIndex(item => item.id === cake.id)
    if (existingCakeIndex !== -1) {
      addCartData(prev =>
        prev.map((item, index) => {
          if (index === existingCakeIndex) {
            return {...item, qty: item.qty + cake.qty}
          }
          return item
        }),
      )
    } else {
      addCartData(prev => [...prev, cake])
    }
  }

  const onRemoveAllCake = () => {
    addCartData([])
  }

  const onRemoveCake = id => {
    const removedItemList = cartList.filter(eachItem => eachItem.id !== id)
    addCartData(removedItemList)
  }

  const onIncrementQty = id => {
    addCartData(prev =>
      prev.map(eachItem => {
        if (eachItem.id === id) {
          const updatedQuantity = eachItem.qty + 1
          return {...eachItem, qty: updatedQuantity}
        }
        return eachItem
      }),
    )
  }

  const onDecrementQty = id => {
    addCartData(prev =>
      prev.map(eachItem => {
        if (eachItem.id === id) {
          if (eachItem.qty > 1) {
            const updatedQuantity = eachItem.qty - 1
            return {...eachItem, qty: updatedQuantity}
          }
          onRemoveCake(id)
        }
        return eachItem
      }),
    )
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCartItem: onAddCartItem,
        removeCartItem: onRemoveCake,
        removeAllCartItems: onRemoveAllCake,
        incrementCartItemQuantity: onIncrementQty,
        decrementCartItemQuantity: onDecrementQty,
      }}
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cakes" component={Cakes} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/cart" component={Cart} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
      </Switch>
      <GoToTopButton />
    </CartContext.Provider>
  )
}

export default App
