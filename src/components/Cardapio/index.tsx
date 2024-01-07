import { Card, Titulo, Image, Descricao, Botao } from './styles'

type Props = {
  title: string
  description: string
  image: string
  valor: string
  serve: string
}

export const Cardapio = ({
  title,
  description,
  image,
  valor,
  serve
}: Props) => (
  <>
    <Card>
      <Image src={image} />
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
      <span>{valor}</span>
      <span>{serve}</span>
      <div className="ContainerBotao">
        <Botao>Adicionar ao carrinho</Botao>
      </div>
    </Card>
  </>
)

export default Cardapio
