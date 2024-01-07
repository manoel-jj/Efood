import { useEffect, useState } from 'react'
import CardapioList from '../../components/CardapioList'
import { HeaderCardapio } from '../../components/HeaderCardapio'
import Footer from '../../components/Footer'

export type IfoodCardapio = {
  id: number
  foto: string
  nome: string
  descricao: string
  porcao: string
  preco: string
}

const Cardapio = () => {
  const [cardapio, setCardapio] = useState<IfoodCardapio[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        setCardapio(res as IfoodCardapio[])
      })
  }, [])

  return (
    <div>
      <HeaderCardapio />
      <CardapioList ifood={cardapio} />
      <Footer />
    </div>
  )
}

export default Cardapio
