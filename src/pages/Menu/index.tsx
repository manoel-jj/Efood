import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import MenuList from '../../components/MenuList'
import Loader from '../../components/Loader'
import Cart from '../../components/Cart'

import { useGetMenuQuery } from '../../services/api'

type MenuParams = {
  id: string
}

const Menu = () => {
  const { id } = useParams() as MenuParams
  const { data: menu } = useGetMenuQuery(id)

  if (!menu) {
    return <Loader />
  }

  return (
    <>
      <Header />
      <Hero />
      <Cart />
      <MenuList items={menu.cardapio} />
    </>
  )
}

export default Menu
