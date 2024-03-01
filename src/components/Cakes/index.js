import {useState, useEffect, useContext, useCallback} from 'react'
import {ThreeCircles} from 'react-loader-spinner'
import {GoTriangleDown} from 'react-icons/go'

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
  CakesPageSearchInputContainer,
  CakesPageSearchInput,
  CakesPageListContainer,
  CakesPageLoaderContainer,
  CakesPageFailureContainerContainer,
  CakesPageFailureImage,
  CakesPageFailureHeadingContainer,
  CakesPageFailureHeadingDescription,
  CakesPageRetryImage,
  FilterBtn,
  FilterBtnIcon,
  SortContainer,
  SortByPriceAndTypeContainer,
  SortPriceContainer,
  SortTypeContainer,
  SortByPrice,
  SortOptionContainer,
  SortOption,
  SortLabel,
} from './styledComponents'

const cakeListApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  in_progress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

const Cakes = () => {
  const [cakeData, setCakeData] = useState([])
  const [cakeDataStatus, setCakeDataStatus] = useState({
    status: cakeListApiStatusConstants.initial,
  })
  const [searchInput, setSearchInput] = useState('')
  const [priceOrderInput, setPriceOrderInput] = useState({
    orderBy: 'id',
    order: '',
  })
  const [cakeTypeInput, setCakTypeInput] = useState([])
  const [isFilterBtnActive, setFilterBtn] = useState(false)

  const onClickFilterBtn = () => setFilterBtn(prev => !prev)

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

  const getCakeData = useCallback(async () => {
    setCakeDataStatus({
      status: cakeListApiStatusConstants.in_progress,
    })
    const cakeApiUrl = `http://localhost:3001/cakes/?search_q=${searchInput}&cake_type=${cakeTypeInput.join()}&order_by=${
      priceOrderInput.orderBy
    }&order=${priceOrderInput.order}`
    const cakeApiResponse = await fetch(cakeApiUrl)
    if (cakeApiResponse.ok) {
      const data = await cakeApiResponse.json()
      const formattedCakeData = data.map(eachData =>
        getFormattedCakeData(eachData),
      )
      setCakeData(formattedCakeData)
      setCakeDataStatus({
        status: cakeListApiStatusConstants.success,
      })
    } else {
      setCakeDataStatus({
        status: cakeListApiStatusConstants.failure,
      })
    }
  }, [searchInput, cakeTypeInput, priceOrderInput])

  const {addCartItem} = useContext(CartContext)

  useEffect(() => {
    getCakeData()
  }, [getCakeData])

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

  const onChangeSearchInput = event => {
    setSearchInput(event.target.value)
  }
  const onChangePriceOrder = event => {
    setPriceOrderInput({
      orderBy: 'price',
      order: event.target.value,
    })
  }

  const onChangeCakeType = event => {
    const type = event.target.value
    const notInList = cakeTypeInput.filter(eachItem => eachItem === type)
    if (notInList.length === 0) {
      setCakTypeInput(prev => [...prev, type])
    } else {
      const filterData = cakeTypeInput.filter(eachItem => eachItem !== type)
      setCakTypeInput(filterData)
    }
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

  const renderLoader = () => (
    <CakesPageLoaderContainer>
      <ThreeCircles
        visible
        height="50"
        width="50"
        color="#e5bf4a"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </CakesPageLoaderContainer>
  )

  const onClickRetryBtn = () => {
    getCakeData()
  }

  const renderFailureContainer = () => (
    <CakesPageFailureContainerContainer>
      <CakesPageFailureImage
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="cake-list-failure-image"
      />
      <CakesPageFailureHeadingContainer>
        Oops Something Went Wrong
      </CakesPageFailureHeadingContainer>
      <CakesPageFailureHeadingDescription>
        We are having some trouble processing your request. Please try again.
      </CakesPageFailureHeadingDescription>
      <CakesPageRetryImage onClick={onClickRetryBtn}>Retry</CakesPageRetryImage>
    </CakesPageFailureContainerContainer>
  )

  const renderCakeListView = () => {
    const {status} = cakeDataStatus
    switch (status) {
      case cakeListApiStatusConstants.success:
        return renderCakeListContainer()
      case cakeListApiStatusConstants.in_progress:
        return renderLoader()
      case cakeListApiStatusConstants.failure:
        return renderFailureContainer()
      default:
        return null
    }
  }

  return (
    <CakesPageContainer>
      <Header />
      <CakesPageMainContainer>
        {renderCakePageBannerContainer()}
        <CakesPageResponsiveContainer>
          <CakesPageSearchInputContainer>
            <FilterBtn onClick={onClickFilterBtn}>
              Filter
              <FilterBtnIcon>
                <GoTriangleDown />
              </FilterBtnIcon>
            </FilterBtn>
            <CakesPageSearchInput
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={onChangeSearchInput}
            />
          </CakesPageSearchInputContainer>
          <SortContainer filter={isFilterBtnActive ? 'block' : 'none'}>
            <SortByPriceAndTypeContainer>
              <SortByPrice>Price:</SortByPrice>
              <SortPriceContainer>
                <SortOptionContainer>
                  <SortOption
                    type="radio"
                    value="ASC"
                    id="low-price"
                    name="price"
                    onClick={onChangePriceOrder}
                  />
                  <SortLabel htmlFor="low-price">Low to High</SortLabel>
                </SortOptionContainer>
                <SortOptionContainer>
                  <SortOption
                    type="radio"
                    value="DESC"
                    id="high-price"
                    name="price"
                    onClick={onChangePriceOrder}
                  />
                  <SortLabel htmlFor="high-price">High to Low</SortLabel>
                </SortOptionContainer>
              </SortPriceContainer>
            </SortByPriceAndTypeContainer>
            <SortByPriceAndTypeContainer>
              <SortByPrice>Cake Type:</SortByPrice>
              <SortTypeContainer>
                <SortOptionContainer>
                  <SortOption
                    type="checkbox"
                    value="cake"
                    id="type-cake"
                    onChange={onChangeCakeType}
                  />
                  <SortLabel htmlFor="type-cake">Cake</SortLabel>
                </SortOptionContainer>
                <SortOptionContainer>
                  <SortOption
                    type="checkbox"
                    value="cup cake"
                    id="type-cup-cake"
                    onChange={onChangeCakeType}
                  />
                  <SortLabel htmlFor="type-cup-cake">Cup Cake</SortLabel>
                </SortOptionContainer>
              </SortTypeContainer>
            </SortByPriceAndTypeContainer>
          </SortContainer>
          {renderCakeListView()}
          <FollowUs />
          <Footer />
        </CakesPageResponsiveContainer>
      </CakesPageMainContainer>
    </CakesPageContainer>
  )
}

export default Cakes
