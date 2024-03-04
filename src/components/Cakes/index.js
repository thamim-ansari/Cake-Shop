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
  CakesContainer,
  CakesBannerBgContainer,
  CakesBannerHeading,
  CakesResponsiveContainer,
  CakesSearchInputContainer,
  CakesSearchInput,
  CakesListContainer,
  CakesLoaderContainer,
  CakesFailureContainer,
  CakesFailureImage,
  CakesFailureHeading,
  CakesFailureDescription,
  CakesRetryBtn,
  CakesFilterBtn,
  FilterBtnIcon,
  FilterByContainer,
  FilterByPriceAndTypeContainer,
  SortPriceContainer,
  FilterByTypeContainer,
  SortByPrice,
  FilterOptionsContainer,
  FilterOptions,
  FilterLabel,
  CakesEmptyResultContainer,
  CakesEmptyResultImage,
  CakesEmptyResultHeading,
  CakeEmptyResultDescription,
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
  const [priceAndOrderInput, setPriceOrderInput] = useState({
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
      priceAndOrderInput.orderBy
    }&order=${priceAndOrderInput.order}`
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
  }, [searchInput, cakeTypeInput, priceAndOrderInput])

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
    <CakesBannerBgContainer>
      <CakesBannerHeading>Delicious Cakes</CakesBannerHeading>
    </CakesBannerBgContainer>
  )

  const renderSearchContainer = () => (
    <CakesSearchInputContainer>
      <CakesFilterBtn onClick={onClickFilterBtn}>
        Filter
        <FilterBtnIcon>
          <GoTriangleDown />
        </FilterBtnIcon>
      </CakesFilterBtn>
      <CakesSearchInput
        type="search"
        placeholder="Search"
        value={searchInput}
        onChange={onChangeSearchInput}
      />
    </CakesSearchInputContainer>
  )

  const renderPriceFilter = () => (
    <FilterByPriceAndTypeContainer>
      <SortByPrice>Price:</SortByPrice>
      <SortPriceContainer>
        <FilterOptionsContainer>
          <FilterOptions
            type="radio"
            value="ASC"
            id="low-price"
            name="price"
            onClick={onChangePriceOrder}
          />
          <FilterLabel htmlFor="low-price">Low to High</FilterLabel>
        </FilterOptionsContainer>
        <FilterOptionsContainer>
          <FilterOptions
            type="radio"
            value="DESC"
            id="high-price"
            name="price"
            onClick={onChangePriceOrder}
          />
          <FilterLabel htmlFor="high-price">High to Low</FilterLabel>
        </FilterOptionsContainer>
      </SortPriceContainer>
    </FilterByPriceAndTypeContainer>
  )

  const renderCakeTypeFilter = () => (
    <FilterByPriceAndTypeContainer>
      <SortByPrice>Cake Type:</SortByPrice>
      <FilterByTypeContainer>
        <FilterOptionsContainer>
          <FilterOptions
            type="checkbox"
            value="cake"
            id="type-cake"
            onChange={onChangeCakeType}
          />
          <FilterLabel htmlFor="type-cake">Cake</FilterLabel>
        </FilterOptionsContainer>
        <FilterOptionsContainer>
          <FilterOptions
            type="checkbox"
            value="cup cake"
            id="type-cup-cake"
            onChange={onChangeCakeType}
          />
          <FilterLabel htmlFor="type-cup-cake">Cup Cake</FilterLabel>
        </FilterOptionsContainer>
      </FilterByTypeContainer>
    </FilterByPriceAndTypeContainer>
  )

  const renderFilterContainer = () => (
    <FilterByContainer filter={isFilterBtnActive ? 'block' : 'none'}>
      {renderPriceFilter()}
      {renderCakeTypeFilter()}
    </FilterByContainer>
  )

  const renderEmptyCakeListContainer = () => (
    <CakesEmptyResultContainer>
      <CakesEmptyResultImage
        src="https://img.freepik.com/free-vector/investigation-concept-illustration_114360-20311.jpg?t=st=1709368908~exp=1709372508~hmac=cc7a7c2c70e2ebc83260f365e98c1638800b30481ee43039e8b429e06ae745bb&w=740"
        alt="empty-result-image"
      />
      <CakesEmptyResultHeading>No Cakes Found</CakesEmptyResultHeading>
      <CakeEmptyResultDescription>
        We could not find any cakes. Try other filters.
      </CakeEmptyResultDescription>
    </CakesEmptyResultContainer>
  )

  const renderCakeListContainer = () => {
    if (cakeData.length !== 0) {
      return (
        <CakesListContainer>
          {cakeData.map(eachItem => (
            <CakeList
              key={eachItem.id}
              cakeDetails={eachItem}
              onClickAddProduct={onClickAddProduct}
              onIncrementQty={onIncrementQty}
              onDecrementQty={onDecrementQty}
            />
          ))}
        </CakesListContainer>
      )
    }
    return renderEmptyCakeListContainer()
  }

  const renderLoader = () => (
    <CakesLoaderContainer>
      <ThreeCircles
        visible
        height="50"
        width="50"
        color="#e5bf4a"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </CakesLoaderContainer>
  )

  const onClickRetryBtn = () => {
    getCakeData()
  }

  const renderFailureContainer = () => (
    <CakesFailureContainer>
      <CakesFailureImage
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="cake-list-failure-image"
      />
      <CakesFailureHeading>Oops Something Went Wrong</CakesFailureHeading>
      <CakesFailureDescription>
        We are having some trouble processing your request. Please try again.
      </CakesFailureDescription>
      <CakesRetryBtn onClick={onClickRetryBtn}>Retry</CakesRetryBtn>
    </CakesFailureContainer>
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
      <CakesContainer>
        {renderCakePageBannerContainer()}
        <CakesResponsiveContainer>
          {renderSearchContainer()}
          {renderFilterContainer()}
          {renderCakeListView()}
          <FollowUs />
          <Footer />
        </CakesResponsiveContainer>
      </CakesContainer>
    </CakesPageContainer>
  )
}

export default Cakes
