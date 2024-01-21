import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

type InputGroupProps = {
  maxWidth?: string
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${colors.orange};
  z-index: 1;
  padding: 32px 8px 0px 8px;
  width: 360px;

  .empty-text {
    font-size: 14px;
    font-weight: bold;
    line-height: 22px;
    color: ${colors.peach};
    text-align: center;
  }

  @media (max-width: ${breakpoints.phone}) {
    width: 80%;
  }

  .error-message {
    color: ${colors.peach};
    font-size: 14px;
    text-align: center;
    padding-top: 8px;
  }
`

export const Price = styled.p`
  font-weight: 700;
  font-size: 14px;
  justify-content: space-between;
  color: ${colors.peach};
  display: flex;
  margin-top: 40px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.peach};
  position: relative;
  padding: 8px;
  margin-bottom: 16px;

  > img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    padding-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }
`

export const Dumpster = styled.img`
  width: 16px;
  height: 16px;
  bottom: 8px;
  right: 8px;
  position: absolute;
  cursor: pointer;
`

export const Form = styled.form`
  ${ButtonContainer} {
    margin-top: 8px;
  }

  .delivery-form {
    margin-bottom: 16px;
  }
`

export const DeliveryText = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.peach};
  margin-bottom: 16px;
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    font-weight: bold;
    color: ${colors.peach};
    display: block;
    margin: 8px 0 8px 0;
  }

  input {
    width: 100%;
    background-color: ${colors.peach};
    height: 32px;
    border: 1px solid ${colors.peach};

    &.error {
      border: 2px solid red;
    }
  }
`

export const ZipCodeContainer = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    max-width: 155px;
  }
`

export const CardContainer = styled.div`
  display: flex;
  gap: 32px;
`

export const ExpirationCard = styled.div`
  display: flex;
  gap: 34px;
  margin-bottom: 24px;

  input {
    max-width: 155px;
  }
`

export const ConclusionOrder = styled.div`
  color: ${colors.peach};

  h4 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }
`

export const CustomButton = styled.button`
  background-color: ${colors.peach};
  color: ${colors.orange};
  font-size: 14px;
  font-weight: 700;
  border: none;
  text-align: center;
  width: 100%;
  padding: 4px 0;
  cursor: pointer;
`
