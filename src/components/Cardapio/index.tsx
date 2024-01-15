import { useState } from 'react'
import {
  Card,
  Titulo,
  Image,
  Descricao,
  Botao,
  Modal,
  ModalContent,
  Button
} from './styles'

import fechar from '../../assets/images/close.png'

type Props = {
  item: Item
}

export const Cardapio = ({ item }: Props) => {
  const [isModalVisible, setModalVisible] = useState(false)
  const openModal = () => setModalVisible(true)
  const closeModal = () => setModalVisible(false)

  return (
    <div className="container">
      <Card>
        <Image src={item.foto as string} />
        <Titulo>{item.nome}</Titulo>
        <Descricao>{item.descricao}</Descricao>
        <div className="ContainerBotao">
          <Botao
            type="button"
            title="Adicionar ao carrinho"
            onClick={openModal}
          >
            Adicionar ao carrinho
          </Botao>
        </div>
      </Card>
      {isModalVisible && (
        <Modal>
          <ModalContent className="container">
            <img className="pizza-img" src={item.foto} alt="pizza marguerita" />
            <img className="fechar-img" src={fechar} alt="icone fechar" />
            <div>
              <h4>Pizza Marguerita</h4>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião. <br />
                <br />
                <br />
                Serve: de 2 a 3 pessoas
              </p>
              <Button type="button">Adicionar ao carrinho - R$ 60,90 </Button>
            </div>
          </ModalContent>
          <div className="overlay" onClick={closeModal}></div>
        </Modal>
      )}
    </div>
  )
}
export default Cardapio
