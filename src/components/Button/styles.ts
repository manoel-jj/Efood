import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from './index'

export const ButtonContainer = styled.button<Props>`
  background-color: ${colors.peach};
  color: ${colors.orange};
  font-size: 14px;
  font-weight: 700;
  border: none;
  text-align: center;
  width: ${(props) => (props.size === 'big' ? '100%' : '304px')};
  padding: ${(props) => (props.size === 'big' ? '4px 0' : '4px 6px')};
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.orange};
  color: ${colors.peach};
  font-size: 14px;
  font-weight: 700;
  border: none;
  text-decoration: none;
  cursor: pointer;
`
