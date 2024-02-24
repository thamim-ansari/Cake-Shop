import {styled} from 'styled-components'

export const CakeListItem = styled.li`
  list-style-type: none;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    width: 50%;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 992px) {
    width: 33%;
  }
`
export const CakeImage = styled.img`
  width: 100%;
  height: 225px;
  @media screen and (min-width: 768px) {
    height: 275px;
  }
`
export const CakeItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`
export const CakeName = styled.p`
  color: #ffffff;
  font-family: 'Poiret One', 'sans serif';
  font-size: 18px;
  margin: 0px;
  margin-bottom: 5px;
`
export const CakeWeight = styled.p`
  color: #ffffff;
  font-family: 'Poiret One', 'sans serif';
  font-size: 10px;
`
export const CakeItemDetailsAndOrderContainer = styled.div`
  display: flex;
`
export const CakePriceAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  width: 70%;
`
export const CakeDescription = styled.p`
  color: #ffffff;
  font-family: 'Jost', 'sans serif';
  font-size: 14px;
  margin: 0px;
  font-weight: 400;
  line-height: 1.5;
`
export const CakeDescriptionReadMoreBtn = styled.button`
  display: ${props => props.visibility};
  color: #e5bf4a;
  background-color: transparent;
  font-family: 'Jost', 'sans serif';
  margin: 0px;
  padding: 0px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const CakePrice = styled.p`
  color: #e5bf4a;
  font-family: 'Jost', 'sans serif';
  font-size: 20px;
  font-weight: 500;
  margin: 0px;
`
export const CakeOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
`
export const CakeQtyAddAndMinusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`
export const CakeQty = styled.p`
  color: #e5bf4a;
  font-family: 'Jost', 'sans serif';
  font-size: 20px;
  margin: 0px 5px 0px 5px;
`
export const CakeQtyAddAndMinusBtn = styled.button`
  background-color: transparent;
  border: 1px solid #e5bf4a;
  padding: 5px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const CakeAddToCartBtn = styled.button`
  color: #0a0a0a;
  background-color: #e5bf4a;
  font-family: 'Jost', 'sans serif';
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    border: 1px solid #e5bf4a;
    color: #e5bf4a;
  }
`
