import { useEffect, useState } from 'react'
import CardapioList from '../../components/CardapioList'
import { HeaderCardapio } from '../../components/HeaderCardapio'
import Footer from '../../components/Footer'

const Cardapio = () => {
  const [cardapio, setCardapio] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        setCardapio(res as Restaurant[])
      })
  }, [])

  return (
    <div>
      <HeaderCardapio />
      <CardapioList restaurantes={cardapio} />
      <Footer />
    </div>
  )
}

export default Cardapio
