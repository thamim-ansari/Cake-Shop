import {styled} from 'styled-components'

export const CakesPageContainer = styled.div`
  background-color: #0a0a0a;
  min-height: 100vh;
`
export const CakesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CakesBannerBgContainer = styled.div`
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
export const CakesBannerHeading = styled.h1`
  color: #fff;
  font-family: 'Poiret One', 'sans serif';
  font-size: 40px;
  font-weight: 300;
  width: 90%;
  @media screen and (min-width: 768px) {
    font-size: 70px;
  }
`
export const CakesResponsiveContainer = styled.div`
  width: 90%;
`
export const CakesSearchInputContainer = styled.div`
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
export const CakesSearchInput = styled.input`
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
export const CakesFilterBtn = styled.button`
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
export const FilterByContainer = styled.div`
  display: ${props => props.filter}!important;
  background-color: #0a0a0a;
  box-shadow: 0px 0px 4px #ffffff;
  padding: 10px 15px 10px 15px;
  display: flex;
  flex-direction: column;
  position: absolute;
`
export const FilterByPriceAndTypeContainer = styled.div`
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
export const FilterByTypeContainer = styled.div`
  margin-left: 5px;
`
export const FilterOptionsContainer = styled.div`
  display: flex;
`
export const FilterOptions = styled.input`
  font-family: 'Jost', 'sans serif';
  accent-color: #e5bf4a;
`
export const FilterLabel = styled.label`
  color: #fff;
  font-family: 'Jost', 'sans serif';
  font-weight: 300;
`
export const ClearFilterBtn = styled.button`
  color: #ff0000;
  font-size: 14px;
  font-family: 'Jost', 'sans serif';
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const CakesListContainer = styled.ul`
  padding-left: 0px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`
export const CakesLoaderContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CakesFailureContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CakesFailureHeading = styled.p`
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
export const CakesFailureDescription = styled.p`
  color: #fff;
  font-family: 'Jost', 'sans serif';
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  margin: 0px;
`
export const CakesFailureImage = styled.img`
  width: 300px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const CakesRetryBtn = styled.button`
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
export const CakesEmptyResultContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CakesEmptyResultImage = styled.img`
  width: 300px;
`
export const CakesEmptyResultHeading = styled.p`
  color: #e5bf4a;
  font-family: 'Jost', 'sans serif';
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin: 10px 0px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
    margin: 20px 0px;
  }
`
export const CakeEmptyResultDescription = styled.p`
  color: #fff;
  font-family: 'Jost', 'sans serif';
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  margin: 0px;
`
