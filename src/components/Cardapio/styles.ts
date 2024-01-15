import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  border: 1px solid ${cores.rose};
  margin-bottom: 32px;
  background-color: ${cores.rose};
  color: ${cores.branca};
`
export const Titulo = styled.h2`
  margin-left: 8px;
  font-weight: 900;
  font-size: 16px;
`

export const Descricao = styled.p`
  margin: 8px;
  font-weight: 400;
  font-size: 14px;
`

export const Image = styled.img`
  width: 100%;
  padding: 8px;
`
export const Botao = styled.button`
  width: 100%;
  background-color: #ffebd9;
  color: ${cores.rose};
  border: none;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 84.76px 4px 83.24px;
  white-space: nowrap;
`
export const Modal = styled.div`
  position: absolute;
  top: 490px;
  width: 100%;
  z-index: 2;
  display: none;

  &.visivel {
    display: flex;
  }

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
    font-weight: 400;
    font-size: 14px;
    margin-right: 32px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
`
export const Button = styled.button`
  font-size: 14px;
  font-weight: 700;
  width: 218px;
  height: 24px;
  padding: 4px 7px 4px 7px;
  color: ${cores.rose};
  background-color: ${cores.branca};
  border: none;
`
