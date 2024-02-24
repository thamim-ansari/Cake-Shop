import {styled} from 'styled-components'

export const CartPageContainer = styled.div`
  background-color: #0a0a0a;
  min-height: 100vh;
`
export const CartPageMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CartPageBannerBgContainer = styled.div`
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
export const CartPageBannerHeading = styled.p`
  color: #fff;
  font-family: 'Poiret One', 'sans serif';
  font-size: 40px;
  font-weight: 300;
  width: 90%;
  @media screen and (min-width: 768px) {
    font-size: 70px;
  }
`
export const CartPageResponsiveContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
export const CartPageItemsRemoveAllBtn = styled.button`
  color: #e3242b;
  background-color: transparent;
  font-family: 'Jost', 'sans serif';
  font-size: 16px;
  font-weight: 500;
  align-self: flex-end;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0px;
  margin-bottom: 20px;
`

export const CartPageListContainer = styled.ul`
  padding-left: 0px;
  margin: 0px;
`
export const CartPageBillContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const CartPageBillSubContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const CartPageBillQtyAndHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const CartPageBillHeading = styled.p`
  color: #fff;
  font-family: 'Jost', 'sans serif';
  font-size: 24px;
  text-align: right;
  margin: 0px;
`
export const CartPageBillTotal = styled.p`
  color: #e5bf4a;
  font-family: 'Jost', 'sans serif';
  font-size: 24px;
  margin: 0px;
  margin-left: 5px;
`
export const CartPageBillQty = styled.p`
  color: #fff;
  font-family: 'Jost', 'sans serif';
  font-size: 14px;
  margin: 0px;
`
export const CartPageCheckoutBtn = styled.button`
  color: #fff;
  background-color: #e5bf4a;
  font-family: 'Jost', 'sans serif';
  padding: 8px 16px;
  font-size: 20px;
  margin-top: 20px;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    border: 1px solid #e5bf4a;
    color: #e5bf4a;
  }
  @media screen and (min-width: 768px) {
    align-self: flex-end;
    padding: 8px 100px;
  }
`
export const CartPageEmptyCartContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CartPageEmptyCartImage = styled.img`
  width: 300px;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`
export const CartPageEmptyCartHeading = styled.p`
  color: #e5bf4a;
  font-family: 'Poiret One', 'sans serif';
  font-size: 30px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 45px;
  }
`
export const CartPageEmptyCartDescription = styled.p`
  color: #fff;
  font-family: 'Jost', 'sans serif';
  font-size: 18px;
  margin: 0px;
  font-weight: 300;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
