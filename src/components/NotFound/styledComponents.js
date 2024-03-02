import {styled} from 'styled-components'

export const NotFoundPageContainer = styled.div`
  background-color: #0a0a0a;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NotFoundPageMainContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NotFoundPageImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const NotFoundPageHeading = styled.p`
  color: #e5bf4a;
  font-family: 'Poiret One', 'sans serif';
  font-size: 40px;
  font-weight: 600;
  margin: 10px 0px;
`
export const NotFoundPageDescription = styled.p`
  color: #fff;
  font-family: 'Jost', 'sans serif';
  font-size: 16px;
  margin: 0px;
  text-align: center;
`
export const GoHomeBtn = styled.button`
  color: #0a0a0a;
  background-color: #e5bf4a;
  border: 1px solid #e5bf4a;
  padding: 8px 24px;
  font-family: 'Jost', 'sans serif';
  font-size: 16px;
  margin-top: 15px;
  text-align: center;
  &:hover {
    color: #e5bf4a;
    background-color: transparent;
  }
`
