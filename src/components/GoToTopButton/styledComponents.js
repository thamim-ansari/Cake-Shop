import {styled} from 'styled-components'

export const GoToTopBtn = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: ${props => props.visibility};
  padding: 10px 12px;
  background-color: #e5bf4a;
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  @media screen and (min-width: 992px) {
    padding: 15px 17px;
  }
`
