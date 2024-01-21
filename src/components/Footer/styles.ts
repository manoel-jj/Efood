import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterSection = styled.div`
  height: 298px;
  background-color: ${colors.lightPeach};
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;

  p {
    font-size: 10px;
    font-weight: 400;
  }
`

export const ListaLinksMedia = styled.ul`
  display: flex;
  padding-bottom: 80px;
  padding-top: 32px;

  a {
    margin-right: 8px;
  }
`
