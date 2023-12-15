import Avaliacao from '../Avaliacao'
import Tag from '../Tag'
import { Card, Infos, Titulo, Image, ContainerTitulo, Descricao, Button } from './styles'

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
    <ContainerTitulo>
      <Titulo>{title}</Titulo>
      <Avaliacao valorNota={nota} />
    </ContainerTitulo>
    <Infos>
      <Tag texto={infos}></Tag>
      <Tag texto={destaque}></Tag>
    </Infos>

    <Descricao>{description}</Descricao>
    <Button>botao</Button>
  </Card>
)

export default Product
