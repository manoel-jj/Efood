import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import instagram from '../../assets/images/instagram.svg'

import * as S from './styles'
import { Logo } from '../../styles'

const Footer = () => (
  <S.FooterSection>
    <Logo src={logo} alt="Logo Efood" />
    <S.ListaLinksMedia>
      <li>
        <a title="Clique aqui para ir para o instagram" href="#">
          <img src={instagram} />
        </a>
      </li>
      <li>
        <a title="Clique aqui para ir para o instagram" href="#">
          <img src={facebook} />
        </a>
      </li>
      <li>
        <a title="Clique aqui para ir para o instagram" href="#">
          <img src={twitter} />
        </a>
      </li>
    </S.ListaLinksMedia>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.{' '}
    </p>
  </S.FooterSection>
)

export default Footer
