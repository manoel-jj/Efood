import { useDispatch } from 'react-redux'
import { useState } from 'react'

import Button from '../Button'
import close from '../../assets/images/fechar.svg'

import { add, open } from '../../store/reducers/cart'

import * as S from './styles'

type Props = {
  items: CardapioItem[]
  restaurante?: Restaurante
}

interface modalState extends CardapioItem {
  isVisible: boolean
}

export const formatPrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
const MenuList = ({ items }: Props) => {
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(add(modal!))
    dispatch(open())
    CloseModal()
  }

  const getDescription = (description: string) => {
    if (description.length > 160) {
      return description.slice(0, 157) + '...'
    }
    return description
  }
  const [modal, setModal] = useState<modalState>({
    isVisible: false,
    descricao: '',
    foto: '',
    porcao: '',
    nome: '',
    id: 0,
    preco: 0
  })

  const CloseModal = () => {
    setModal({
      isVisible: false,
      descricao: '',
      foto: '',
      porcao: '',
      nome: '',
      id: 0,
      preco: 0
    })
  }

  return (
    <>
      <S.MenuContainer className="container">
        {items.map((cardapio) => (
          <li key={cardapio.id}>
            <S.Card>
              <img src={cardapio.foto} />
              <S.PlateName>{cardapio.nome}</S.PlateName>
              <S.Description>
                {getDescription(cardapio.descricao)}
              </S.Description>
              <Button
                type="button"
                size="big"
                title="Clique aqui para ver mais detalhes"
                onClick={() => {
                  setModal({
                    isVisible: true,
                    descricao: cardapio.descricao,
                    foto: cardapio.foto,
                    nome: cardapio.nome,
                    porcao: cardapio.porcao,
                    id: cardapio.id,
                    preco: cardapio.preco
                  })
                }}
              >
                Mais detalhes
              </Button>
            </S.Card>
          </li>
        ))}
      </S.MenuContainer>
      <S.Modal className={modal.isVisible ? 'visivel' : ''}>
        <S.ModalContent>
          <S.Picture src={modal.foto} />
          <div>
            <h3>{modal.nome}</h3>
            <S.Close
              onClick={() => {
                CloseModal()
              }}
              src={close}
            />
            <p>{modal.descricao}</p>
            <p>
              <span>Serve: {modal.porcao}</span>
            </p>
            <Button
              type="button"
              title="Clique aqui para adicionar este item ao carrinho"
              size="small"
              onClick={addToCart}
            >
              <>Adicionar ao carrinho - {formatPrice(modal.preco)}</>
            </Button>
          </div>
        </S.ModalContent>
        <div
          className="overlay"
          onClick={() => {
            CloseModal()
          }}
        ></div>
      </S.Modal>
    </>
  )
}

export default MenuList
