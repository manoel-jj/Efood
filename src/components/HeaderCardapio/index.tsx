import { Imagem, HeaderSection, ImgMacarrao, RestaurantesLink, Carrinho, HeaderContainer } from './styles'

import fundoHeader from '../../assets/images/Vector.svg'
import logo from '../../assets/images/logo.svg'
import macarraoBackground from '../../assets/images/fundoMacarrao.png'
import { Link } from 'react-router-dom'

export const HeaderCardapio = () => (
  <>
    <Imagem style={{ backgroundImage: `url(${fundoHeader})` }}>
      <HeaderSection>
        <HeaderContainer>
          <RestaurantesLink>
            <Link to={'/'}>Restaurantes</Link>
          </RestaurantesLink>
          <img src={logo} alt="logo efood" />
          <Carrinho>
            <span>0 produto(s) no carrinho</span>
          </Carrinho>
        </HeaderContainer>
      </HeaderSection>
    </Imagem>
    <ImgMacarrao style={{ backgroundImage: `url(${macarraoBackground})` }}>
      <h1>Italiana</h1>
      <h2>La Dolce Vita Trattoria</h2>
    </ImgMacarrao>
  </>
)
