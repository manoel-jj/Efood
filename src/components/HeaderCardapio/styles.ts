import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Imagem = styled.div`
  width: 100%;
  height: 186px;
`

export const HeaderSection = styled.div`
  img {
    padding-top: 63px;
  }
  h1 {
    font-size: 36px;
    padding-bottom: 40px;
    padding-top: 138px;
  }
`

export const RestaurantesLink = styled.div`
  padding-top: 82px;
  margin-left: 171px;
  font-size: 18px;
  font-weight: 900;
  a {
    color: ${cores.rose};
  }
`

export const Carrinho = styled.div`
  padding-top: 82px;
  margin-right: 171px;
  color: ${cores.rose};

  span {
    font-size: 18px;
    font-weight: 900;
  }
`

export const ImgMacarrao = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  background-size: cover;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  h1 {
    color: ${cores.branca};
    font-size: 32px;
    font-weight: 100;
    position: absolute;
    margin-top: 25px;
    margin-left: 170px;
    z-index: 2;
  }

  h2 {
    color: ${cores.branca};
    position: absolute;
    margin-left: 170px;
    margin-top: 214.75px;
    font-size: 32px;
    font-weight: 900;
    z-index: 2;
  }
`
