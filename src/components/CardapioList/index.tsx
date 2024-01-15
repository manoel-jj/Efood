import Cardapio from '../Cardapio'
import { List } from './styles'

type Props = {
  itens: Item[]
}

const CardapioList = ({ itens }: Props) => {
  console.log('produtos', itens)
  return (
    <div>
      <List>
        {itens.map((item) => (
          <Cardapio key={item.id} item={item} />
        ))}
      </List>
    </div>
  )
}

export default CardapioList
