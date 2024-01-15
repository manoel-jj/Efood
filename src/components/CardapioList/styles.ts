import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  padding-top: 56px;
  margin: 0 171px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
`
export const Card = styled.div`
  border: 1px solid ${cores.rose};
  margin-bottom: 32px;
  width: 320px;
  height: 388px;

  img {
    width: 100%;
    padding: 8px;
  }
`
export const Item = styled.div`
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
export const Button = styled.button`
  width: 100%;
  background-color: #ffebd9;
  color: ${cores.rose};
  border: none;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 84.76px 4px 83.24px;
  white-space: nowrap;
`
