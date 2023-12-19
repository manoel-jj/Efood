import { Card, Titulo, Image, Descricao, Botao } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

export const Cardapio = ({ title, description, image }: Props) => (
  <Card>
    <Image src={image} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <div className="ContainerBotao">
      <Botao>Adicionar ao carrinho</Botao>
    </div>
  </Card>
)

export default Cardapio
