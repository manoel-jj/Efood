import { useParams } from 'react-router-dom'

import { useGetMenuQuery } from '../../services/api'

import { Image } from './styles'
import Loader from '../Loader'

type RestaurantParams = {
  id: string
}

const Hero = () => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurante } = useGetMenuQuery(id)

  if (restaurante) {
    return (
      <Image style={{ backgroundImage: `url(${restaurante.capa})` }}>
        <div className="container">
          <p>{restaurante.tipo}</p>
          <h2>{restaurante.titulo}</h2>
        </div>
      </Image>
    )
  }
  return <Loader />
}

export default Hero
