import { Imagem, HeaderSection, ContainerH1 } from './styles'

import fundoHeader from '../../assets/images/Vector.svg'
import logo from '../../assets/images/logo.svg'

export const Header = () => (
  <Imagem style={{ backgroundImage: `url(${fundoHeader})` }}>
    <HeaderSection>
      <img src={logo} alt="logo efood" />
      <ContainerH1>
        <h1>
          Viva experiências gastronômicas <br />
          no conforto da sua casa
        </h1>
      </ContainerH1>
    </HeaderSection>
  </Imagem>
)
