import { Container, List } from './styles'

type Props = {
  restaurantes: Restaurant[]
}

const CardapioList = ({ restaurantes }: Props) => (
  <>
    <Container>
      <List>
        {restaurantes.map((restaurante) => (
          <div key={restaurante.id}>
            {restaurante.cardapio.map((itemCardapio) => (
              <div key={itemCardapio.id}>
                <img src={itemCardapio.foto} alt={itemCardapio.nome} />
                <h3>{itemCardapio.nome}</h3>
                <p>{itemCardapio.descricao}</p>
                <div>{itemCardapio.porcao}</div>
                <div>{itemCardapio.preco}</div>
              </div>
            ))}
          </div>
        ))}
      </List>
    </Container>
  </>
)

{
  /* <Modal>
<ModalContent className="container">
  <img
    className="pizza-img"
    src={PizzaMargueirta}
    alt="pizza marguerita"
  />
  <img className="fechar-img" src={fechar} alt="icone fechar" />
  <div>
    <h4>Pizza Marguerita</h4>
    <p>
      A pizza Margherita é uma pizza clássica da culinária italiana,
      reconhecida por sua simplicidade e sabor inigualável. Ela é feita
      com uma base de massa fina e crocante, coberta com molho de tomate
      fresco, queijo mussarela de alta qualidade, manjericão fresco e
      azeite de oliva extra-virgem. A combinação de sabores é perfeita,
      com o molho de tomate suculento e ligeiramente ácido, o queijo
      derretido e cremoso e as folhas de manjericão frescas, que adicionam
      um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
      agrada a todos os paladares e é uma ótima opção para qualquer
      ocasião. <br />
      <br />
      <br />
      Serve: de 2 a 3 pessoas
    </p>
    <Botao>Adicionar ao carrinho - R$ 60,90 </Botao>
  </div>
</ModalContent>
<div className="overlay"></div>
</Modal> */
}

export default CardapioList
