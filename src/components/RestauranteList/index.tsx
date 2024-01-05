import { Container, List } from './styles'
import Restaurante from '../Restaurante'
import { IfoodRestaurante } from '../../pages/Home'

export type Props = {
  ifood: IfoodRestaurante[]
}

const RestauranteList = ({ ifood }: Props) => (
  <Container>
    <List className="container">
      {ifood.map((restaurante) => (
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
