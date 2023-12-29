import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContaine = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${cores.bege};
  padding: 40px;
  margin-top: 120px;
`
export const Socialcontainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 80px;
`
export const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
`
export const Copy = styled.p`
  font-size: 10px;
  width: 480px;
  font-weight: 400;
`
export const LogoFooter = styled.img`
  width: 125px;
  height: 57px;
  display: block;
  margin-bottom: 32px;
`
