import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Image = styled.div`
  height: 280px;
  width: 100%;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;
  margin-bottom: 56px;

  .container {
    position: relative;
    z-index: 1;
  }

  &::after {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  p {
    font-size: 32px;
    font-weight: 100;
    padding-top: 25px;
    padding-bottom: 156px;
    color: ${colors.white};
    line-height: 38px;
  }

  h2 {
    font-size: 32px;
    font-weight: 900;
    color: ${colors.white};
    z-index: 1;
  }

  @media (max-width: ${breakpoints.desktop}) {
    p {
      font-size: 24px;
    }

    h2 {
      font-size: 24px;
    }
  }
`
