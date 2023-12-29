import { Link } from 'react-router-dom'
import Avaliacao from '../Avaliacao'
import Tag from '../Tag'
import {
  Card,
  Infos,
  Titulo,
  Image,
  ContainerTitulo,
  Descricao,
  Button,
  Destaque
} from './styles'

type Props = {
  title: string
  description: string
  image: string
  nota: string
  infos: string
  destaque?: string
}

export const Restaurante = ({
  title,
  description,
  infos,
  image,
  nota,
  destaque
}: Props) => (
  <Card>
    <Image src={image} />
    <ContainerTitulo>
      <Titulo>{title}</Titulo>
      <Avaliacao valorNota={nota} />
    </ContainerTitulo>
    <Destaque>{destaque && <Tag texto={destaque}></Tag>}</Destaque>
    <Infos>
      <Tag texto={infos}></Tag>
    </Infos>

    <Descricao>{description}</Descricao>
    <Link to="/Cardapio">
      <Button>Saiba mais</Button>
    </Link>
  </Card>
)

export default Restaurante
