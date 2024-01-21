import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag/index'
import Button from '../Button'

import * as S from './styles'

type Props = {
  titulo: string
  descricao: string
  avaliacao: number
  capa: string
  tipo: string
  id: number
  infos: string[]
}

const RestaurantCard = ({
  titulo,
  descricao,
  avaliacao,
  capa,
  id,
  infos
}: Props) => {
  return (
    <>
      <div className="container">
        <S.Card
          title="Clique aqui para ver os itens do menu"
          to={`/cardapio/${id}`}
        >
          <img src={capa} />
          <S.Infos>
            {infos.map((info) => (
              <Tag key={info}>{info}</Tag>
            ))}
          </S.Infos>
          <S.DescriptionCard>
            <S.CardTitle>
              <p>{titulo}</p>
              <S.Avaliation>
                <p>{avaliacao}</p>
                <img src={estrela} alt="Estrela" />
              </S.Avaliation>
            </S.CardTitle>
            {descricao}
            <Button
              type="link"
              title="Clique aqui para ir para a página do restaurante"
              to={`/cardapio/${id}`}
            >
              Saiba mais
            </Button>
          </S.DescriptionCard>
        </S.Card>
      </div>
    </>
  )
}

export default RestaurantCard
