import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonLink = styled(Link)`
  padding-top: 16px 382px 8px 8px;
  background-color: ${cores.rose};
  color: ${cores.branca};
  margin-bottom: 8px;
  margin-left: 8px;
`
