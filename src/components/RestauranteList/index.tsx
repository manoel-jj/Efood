import Restaurante from '../Restaurante'
import { Container, List } from './styles'

import Pratos from '../../models/Pratos'

type Props = {
  pratos: Pratos[]
}

const RestauranteList = ({ pratos }: Props) => (
  <Container>
    <List>
      {pratos.map((pratos) => (
        <Restaurante
          key={pratos.id}
          title={pratos.title}
          image={pratos.image}
          nota={pratos.nota}
          infos={pratos.Infos}
          destaque={pratos.destaque}
          description={pratos.description}
        />
      ))}
    </List>
  </Container>
)

export default RestauranteList
