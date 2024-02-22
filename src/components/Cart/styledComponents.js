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
export const CartPageItemsBillContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const CartPageItemsBillHeading = styled.p`
  color: #fff;
  font-family: 'Poiret One', 'sans serif';
  font-size: 20px;
`
