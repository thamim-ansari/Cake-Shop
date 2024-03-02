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
  CakePageEmptyResultContainer,
  CakePageEmptyResultImage,
  CakePageEmptyResultHeading,
  CakePageEmptyResultDescription,
} from './styledComponents'

const cakeListApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  in_progress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

const Cakes = () => {
  const {addCartItem} = useContext(CartContext)
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
    console.log(cakeTypeInput)
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

  const renderSearchContainer = () => (
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
  )

  const renderFilterContainer = () => (
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
  )

  const renderEmptyCakeListContainer = () => (
    <CakePageEmptyResultContainer>
      <CakePageEmptyResultImage
        src="https://img.freepik.com/free-vector/investigation-concept-illustration_114360-20311.jpg?t=st=1709368908~exp=1709372508~hmac=cc7a7c2c70e2ebc83260f365e98c1638800b30481ee43039e8b429e06ae745bb&w=740"
        alt="empty-result-image"
      />
      <CakePageEmptyResultHeading>No Cakes Found</CakePageEmptyResultHeading>
      <CakePageEmptyResultDescription>
        We could not find any cakes. Try other filters.
      </CakePageEmptyResultDescription>
    </CakePageEmptyResultContainer>
  )

  const renderCakeListContainer = () => {
    if (cakeData.length !== 0) {
      return (
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
    }
    return renderEmptyCakeListContainer()
  }

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
          {renderSearchContainer()}
          {renderFilterContainer()}
          {renderCakeListView()}
          <FollowUs />
          <Footer />
        </CakesPageResponsiveContainer>
      </CakesPageMainContainer>
    </CakesPageContainer>
  )
}

export default Cakes
