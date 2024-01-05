import RestauranteList from '../../components/RestauranteList'
import { Header } from '../../components/Header'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'

export type IfoodRestaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<IfoodRestaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        setRestaurantes(res as IfoodRestaurante[])
      })
  }, [])

  return (
    <div>
      <Header />
      <RestauranteList ifood={restaurantes} />
      <Footer />
    </div>
  )
}

export default Home
