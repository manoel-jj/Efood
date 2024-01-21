import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonLink } from '../Button/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  max-width: 472px;
  width: 100%;
  height: 420px;
  display: block;
  background-color: ${colors.white};
  color: ${colors.orange};
  text-decoration: none;
  position: relative;

  img {
    display: block;
    width: 100%;
    height: 217px;
    border: 0;
    object-fit: cover;
  }

  .container {
    background-color: ${colors.lightPeach};
  }

  ${TagContainer} {
    margin-left: 8px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 420px;
  }

  @media (max-width: ${breakpoints.phone}) {
    height: 100%;
  }
`

export const CardTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
`

export const Avaliation = styled.div`
  display: flex;

  p {
    margin-right: 8px;
  }

  img {
    height: 21px;
    max-width: 21px;
    width: 100%;
  }
`

export const DescriptionCard = styled.p`
  font-size: 14px;
  font-weight: 400;
  height: 203px;
  border: 1px solid ${colors.orange};
  border-top: none;
  padding: 8px;
  line-height: 22px;
  display: flex;
  flex-direction: column;

  ${ButtonLink} {
    padding: 4px 8px;
    position: absolute;
    left: 8px;
    bottom: 8px;
  }

  @media (max-width: ${breakpoints.phone}) {
    height: 265px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
`
