import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import vector from '../../assets/images/Vector.svg'
import logo from '../../assets/images/logo.svg'

import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar style={{ backgroundImage: `url(${vector})` }}>
      <S.Logo>
        <Link title="Clique aqui para voltar para a home" to="/">
          <img src={logo} />
        </Link>
      </S.Logo>
      <div className="container">
        <a href="/">
          <span>Restaurantes</span>
        </a>

        <S.CartButton onClick={openCart}>
          <span>{items.length}</span>produto(s) no carrinho
        </S.CartButton>
      </div>
    </S.HeaderBar>
  )
}

export default Header
