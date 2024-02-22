import {useState, useEffect, useContext} from 'react'

import Header from '../Header'
import FollowUs from '../FollowUs'
import CakeList from '../CakeList'
import Footer from '../Footer'
import CartContext from '../../context/CartContext'

import {
  CakesPageContainer,
  CakesPageMainContainer,
  CakesPageBannerBgContainer,
  CakesPageBannerHeading,
  CakesPageResponsiveContainer,
  CakesPageListContainer,
} from './styledComponents'

const Cakes = () => {
  const [cakeData, setCakeData] = useState([])
  const {addCartItem} = useContext(CartContext)
  useEffect(() => {
    const getFormattedCakeData = data => ({
      id: data.id,
      name: data.name,
      description: data.description,
      imageUrl: data.image_url,
      price: data.price,
      qty: data.qty,
      type: data.type,
      weight: data.weight,
    })
    const getCakeData = async () => {
      const cakeApiUrl = 'http://localhost:3001/cakes'
      const cakeApiResponse = await fetch(cakeApiUrl)
      const data = await cakeApiResponse.json()
      const formattedCakeData = data.map(eachData =>
        getFormattedCakeData(eachData),
      )
      setCakeData(formattedCakeData)
    }
    getCakeData()
  }, [])

  const onClickAddProduct = id => {
    const filteredCakeData = cakeData.find(eachItem => eachItem.id === id)
    addCartItem(filteredCakeData)
  }
  const onIncrementQty = id => {
    setCakeData(prev =>
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
    setCakeData(prev =>
      prev.map(eachItem => {
        if (eachItem.id === id) {
          if (eachItem.qty > 1) {
            const updatedQuantity = eachItem.qty - 1
            return {...eachItem, qty: updatedQuantity}
          }
        }
        return eachItem
      }),
    )
  }
  const renderCakePageBannerContainer = () => (
    <CakesPageBannerBgContainer>
      <CakesPageBannerHeading>Delicious Cakes</CakesPageBannerHeading>
    </CakesPageBannerBgContainer>
  )

  const renderCakeListContainer = () => (
    <CakesPageListContainer>
      {cakeData.map(eachItem => (
        <CakeList
          key={eachItem.id}
          cakeDetails={eachItem}
          onClickAddProduct={onClickAddProduct}
          onIncrementQty={onIncrementQty}
          onDecrementQty={onDecrementQty}
        />
      ))}
    </CakesPageListContainer>
  )
  return (
    <CakesPageContainer>
      <Header />
      <CakesPageMainContainer>
        {renderCakePageBannerContainer()}
        <CakesPageResponsiveContainer>
          {renderCakeListContainer()}
          <FollowUs />
          <Footer />
        </CakesPageResponsiveContainer>
      </CakesPageMainContainer>
    </CakesPageContainer>
  )
}

export default Cakes
