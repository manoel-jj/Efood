import { Container, List } from './styles'
import Restaurante from '../Restaurante'

type Props = {
  restaurantes: Restaurant[]
}

const RestauranteList = ({ restaurantes }: Props) => (
  <Container>
    <List className="container">
      {restaurantes.map((restaurante) => (
        <Restaurante
          key={restaurante.id}
          title={restaurante.titulo}
          image={restaurante.capa}
          nota={restaurante.avaliacao}
          infos={restaurante.tipo}
          destaque={restaurante.destacado.toString()}
          description={restaurante.descricao}
        />
      ))}
    </List>
  </Container>
)

export default RestauranteList
