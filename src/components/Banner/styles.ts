import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Image = styled.div`
  width: 100%;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;

  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    padding-bottom: 40px;
  }

  img {
    padding-top: 40px;
    padding-bottom: 138px;
  }

  h2 {
    font-size: 36px;
    text-align: center;
  }

  @media (max-width: ${breakpoints.desktop}) {
    height: 240px;

    img {
      padding-bottom: 32px;
    }

    @media (max-width: ${breakpoints.phone}) {
      height: 130px;

      h2 {
        display: none;
      }
    }
  }
`
