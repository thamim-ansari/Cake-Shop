import {styled} from 'styled-components'

export const CakesPageContainer = styled.div`
  background-color: #0a0a0a;
  min-height: 100vh;
`
export const CakesPageMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CakesPageBannerBgContainer = styled.div`
  background-image: url('https://mrwallpaper.com/images/hd/black-forest-cupcake-2xvk9qlah3xhf476.jpg');
  background-size: cover;
  background-position: center;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`
export const CakesPageBannerHeading = styled.h1`
  color: #fff;
  font-family: 'Poiret One', 'sans serif';
  font-size: 40px;
  font-weight: 300;
  width: 90%;
  @media screen and (min-width: 768px) {
    font-size: 70px;
  }
`
export const CakesPageResponsiveContainer = styled.div`
  width: 90%;
`
export const CakesPageSearchInputContainer = styled.div`
  display: flex;
  margin: 15px 0px 15px 0px;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    padding-right: 10px;
    margin: 30px 0px 30px 0px;
  }
  @media screen and (min-width: 1200px) {
    padding-right: 25px;
  }
`
export const CakesPageSearchInput = styled.input`
  width: 100%;
  color: #fff;
  border: 1px solid #fff;
  font-family: 'Jost', 'sans serif';
  font-size: 14px;
  padding: 8px 10px 8px 15px;
  height: 40px;
  background-color: transparent;
  outline: none;
  @media screen and (min-width: 768px) {
    width: 35%;
  }
`
export const FilterBtn = styled.button`
  color: #e5bf4a;
  background-color: transparent;
  font-family: 'Jost', 'sans serif';
  font-size: 14px;
  font-weight: 500;
  margin-right: 10px;
  border: 1px solid #e5bf4a;
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const FilterBtnIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SortContainer = styled.div`
  display: ${props => props.filter}!important;
  background-color: #0a0a0a;
  box-shadow: 0px 0px 4px #ffffff;
  padding: 10px 15px 10px 15px;
  display: flex;
  flex-direction: column;
  position: absolute;
`
export const SortByPriceAndTypeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`
export const SortByPrice = styled.p`
  color: #fff;
  font-family: 'Jost', 'sans serif';
  font-size: 16px;
  font-weight: 500;
  margin: 0px;
`
export const SortPriceContainer = styled.div`
  margin-left: 40px;
`
export const SortTypeContainer = styled.div`
  margin-left: 5px;
`
export const SortOptionContainer = styled.div`
  display: flex;
`
export const SortOption = styled.input`
  font-family: 'Jost', 'sans serif';
  accent-color: #e5bf4a;
`
export const SortLabel = styled.label`
  color: #fff;
  font-family: 'Jost', 'sans serif';
  font-weight: 300;
`
export const CakesPageListContainer = styled.ul`
  padding-left: 0px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`
export const CakesPageLoaderContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CakesPageFailureContainerContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CakesPageFailureHeadingContainer = styled.p`
  color: #e5bf4a;
  font-family: 'Jost', 'sans serif';
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin: 20px 0px 10px 0px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
    margin: 40px 0px 20px 0px;
  }
`
export const CakesPageFailureHeadingDescription = styled.p`
  color: #fff;
  font-family: 'Jost', 'sans serif';
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  margin: 0px;
`
export const CakesPageFailureImage = styled.img`
  width: 300px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const CakesPageRetryImage = styled.button`
  color: #fff;
  background-color: #e5bf4a;
  font-family: 'Jost', 'sans serif';
  font-size: 16px;
  padding: 8px 24px;
  margin-top: 25px;
  border: 1px solid #e5bf4a;
  cursor: pointer;
  &:hover {
    color: #e5bf4a;
    background-color: transparent;
  }
`
