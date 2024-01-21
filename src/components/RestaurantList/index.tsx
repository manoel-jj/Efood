import Loader from '../Loader'
import RestauranteCard from '../RestaurantCard'
import { Lista } from './styles'

type Props = {
  restaurantes: Restaurante[]
  isLoading: boolean
}

const RestaurantList = ({ restaurantes, isLoading }: Props) => {
  const getTagRestaurante = (restaurante: Restaurante) => {
    const tags = []
    if (restaurante.destacado) {
      tags.push('Destaque da semana')
    }
    if (restaurante.tipo) {
      tags.push(restaurante.tipo)
    }
    return tags
  }
  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="container">
      <Lista>
        {restaurantes.map((restaurante) => (
          <li key={restaurante.id}>
            <RestauranteCard
              id={restaurante.id}
              titulo={restaurante.titulo}
              descricao={restaurante.descricao}
              avaliacao={restaurante.avaliacao}
              capa={restaurante.capa}
              tipo={restaurante.tipo}
              infos={getTagRestaurante(restaurante)}
            />
          </li>
        ))}
      </Lista>
    </div>
  )
}

export default RestaurantList
