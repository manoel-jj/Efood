import { Container, List } from './styles'
import { IfoodCardapio } from '../../pages/Cardapio'

type Props = {
  ifood: IfoodCardapio[]
}

const CardapioList = ({ ifood }: Props) => (
  <>
    <Container>
      <List>
        {ifood.map((prato) => (
          <div key={prato.id}>
            <img src={prato.foto} alt={prato.nome} />
            <h3>{prato.nome}</h3>
            <p>{prato.descricao}</p>
            <div>{prato.porcao}</div>
            <div>{prato.preco}</div>
            {/* esssas duas ultimas div coloquei pq na api pediu mas ainda n fiz a estilização */}
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
