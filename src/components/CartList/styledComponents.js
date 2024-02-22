import {styled} from 'styled-components'

export const CartPageItemsContainer = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 4px #ffffff;
  margin-bottom: 15px;
  padding: 15px;
`
export const CartPageItemsImage = styled.img`
  width: 100px;
  height: 100px;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`
export const CartPageItemsNameAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px 0px 10px;
  @media screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
`
export const CartPageItemsName = styled.p`
  color: #fff;
  font-family: 'Poiret One', 'sans serif';
  font-size: 20px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`

export const CakeQtyAddAndMinusContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0px 8px 0px;
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
export const CartPageItemsPrice = styled.p`
  color: #e5bf4a;
  font-family: 'Jost', 'sans serif';
  font-size: 20px;
  margin: 0px;
`
export const CartPageItemsRemoveBtn = styled.button`
  color: #dfdfdf;
  background-color: transparent;
  font-family: 'Jost', 'sans serif';
  font-size: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0px;
`
