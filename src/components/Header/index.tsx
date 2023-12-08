import { Imagem, HeaderSection } from './styles'

import fundoHeader from '../../assets/images/Vector.svg'
import logo from '../../assets/images/logo.svg'

export const Header = () => (
  <Imagem style={{ backgroundImage: `url(${fundoHeader})` }}>
    <HeaderSection>
      <img src={logo} alt="logo efood" />
      <h1>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </h1>
    </HeaderSection>
  </Imagem>
)
