class Pratos {
  title: string
  image: string
  nota: string
  Infos: string
  destaque?: string
  description: string
  id: number

  constructor(
    id: number,
    titulo: string,
    image: string,
    nota: string,
    Infos: string,
    destaque: string,
    description: string
  ) {
    this.id = id
    this.title = titulo
    this.image = image
    this.nota = nota
    this.Infos = Infos
    this.destaque = destaque
    this.description = description
  }
}

export default Pratos
