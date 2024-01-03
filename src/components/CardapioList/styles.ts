import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  padding-top: 56px;
  margin: 0 171px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 900;
`

export const Modal = styled.div`
  position: absolute;
  top: 490px;
  width: 100%;
  z-index: 1;

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  display: flex;
  max-width: 1024px;
  background-color: ${cores.rose};
  color: ${cores.branca};
  z-index: 1;
  position: relative;

  .pizza-img {
    width: 280px;
    height: 280px;
    margin: 32px 24px 32px 32px;
  }
  .fechar-img {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 1000px;
    top: 8px;
  }

  h4 {
    margin-top: 32px;
    font-size: 18px;
    font-weight: 900;
  }

  p {
    width: 656px;
    height: 176px;
    font-weight: 400;
    font-size: 14px;
    margin-right: 32px;
    margin-top: 16px;
  }
`
// .overlay {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.8);
// }
