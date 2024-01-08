import RestauranteList from '../../components/RestauranteList'
import { Header } from '../../components/Header'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        setRestaurantes(res as Restaurant[])
      })
  }, [])

  return (
    <div>
      <Header />
      <RestauranteList restaurantes={restaurantes} />
      <Footer />
    </div>
  )
}

export default Home
