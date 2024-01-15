declare type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Item[]
}

declare type Item = {
  id: number
  foto: string
  nome: string
  descricao: string
  porcao: string
  preco: number
}
