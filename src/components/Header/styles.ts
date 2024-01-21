import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const HeaderBar = styled.header`
  width: 100%;
  height: 186px;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: 900;
  align-items: center;
  justify-content: center;
  display: flex;

  .container {
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: ${colors.orange};
    }
  }

  span {
    margin-right: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
  }

  @media (max-width: ${breakpoints.phone}) {
    display: flex;
    height: 90px;
    padding-left: 32px;

    p {
      display: none;
    }
  }
`

export const Logo = styled.div`
  position: absolute;

  @media (max-width: ${breakpoints.phone}) {
    position: relative;
    margin-right: 48px;
    padding: 32px 0;
  }
`

export const CartButton = styled.a`
  text-decoration: none;
  color: ${colors.orange};
  display: flex;
  cursor: pointer;
`
