import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  display: block;
  position: relative;
  border: 1px solid ${cores.rose};
  margin-bottom: 48px;
`
export const Titulo = styled.h2`
  font-weight: 700;
  font-size: 18px;
  display: inline-block;
`

export const Descricao = styled.h2`
  font-weight: 400;
  font-size: 14px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Image = styled.img`
  width: 100%;
`
