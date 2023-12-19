import { Imagem, HeaderSection } from './styles'

import fundoHeader from '../../assets/images/Vector.svg'
import logo from '../../assets/images/logo.svg'

export const HeaderCardapio = () => (
  <Imagem style={{ backgroundImage: `url(${fundoHeader})` }}>
    <HeaderSection>
      <img src={logo} alt="logo efood" />
    </HeaderSection>
  </Imagem>
)
