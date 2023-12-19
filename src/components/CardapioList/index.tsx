import { Container, List } from './styles'

import Pratos from '../../models/Pratos'
import Cardapio from '../Cardapio'

type Props = {
  pratos: Pratos[]
}

const CardapioList = ({ pratos }: Props) => (
  <Container>
    <List>
      {pratos.map((pratos) => (
        <Cardapio key={pratos.id} title={pratos.title} image={pratos.image} description={pratos.description} />
      ))}
    </List>
  </Container>
)

export default CardapioList
