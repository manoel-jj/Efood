import Avaliacao from '../Avaliacao'
import Tag from '../Tag'
import { Card, Infos, Titulo, Image } from './styles'

type Props = {
  title: string
  description: string
  image: string
  nota: string
  infos: string
  destaque: string
}

export const Product = ({ title, description, infos, image, nota, destaque }: Props) => (
  <Card>
    <Image src={image} />
    <Titulo>{title}</Titulo>
    <Avaliacao valorNota={nota} />
    <Infos>
      <Tag texto={infos}></Tag>
      <Tag texto={destaque}></Tag>
    </Infos>

    <p>{description}</p>
    <button>botao</button>
  </Card>
)

export default Product
