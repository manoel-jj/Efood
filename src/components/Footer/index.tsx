import {
  Copy,
  FooterContaine,
  LogoFooter,
  SocialIcon,
  Socialcontainer
} from './styles'

import logo from '../../assets/images/logo.svg'
import Facebook from '../../assets/images/facebook-round-svgrepo-com 1.svg'
import Tw from '../../assets/images/twitter-2-svgrepo-com 1.svg'
import Insta from '../../assets/images/instagram-round-svgrepo-com (1) 1.svg'

const Footer = () => (
  <FooterContaine>
    <LogoFooter src={logo} alt="" />
    <Socialcontainer>
      <SocialIcon src={Facebook} alt="" />
      <SocialIcon src={Tw} alt="" />
      <SocialIcon src={Insta} alt="" />
    </Socialcontainer>
    <Copy>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Copy>
  </FooterContaine>
)

export default Footer
