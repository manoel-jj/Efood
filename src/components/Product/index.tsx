import Avaliacao from '../Avaliacao'
import Tag from '../Tag'
import { Card, Infos, Titulo, Image, ContainerTitulo, Descricao, Button } from './styles'

type Props = {
  title: string
  description: string
  image: string
  nota: string
  infos: string
  destaque?: string
}

export const Product = ({ title, description, infos, image, nota, destaque }: Props) => (
  <Card>
    <Image src={image} />
    <ContainerTitulo>
      <Titulo>{title}</Titulo>
      <Avaliacao valorNota={nota} />
    </ContainerTitulo>
    <Infos>
      <Tag texto={destaque || ''}></Tag>
      <Tag texto={infos}></Tag>
    </Infos>

    <Descricao>{description}</Descricao>
    <Button>Saiba mais</Button>
  </Card>
)

export default Product
