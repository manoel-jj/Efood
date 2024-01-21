declare interface CardapioItem {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

declare type Restaurante = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  capa: string
  avaliacao: number
  descricao: string
  cardapio: CardapioItem[]
}
