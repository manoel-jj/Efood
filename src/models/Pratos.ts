class Pratos {
  title: string
  image: string
  description: string
  id: number

  constructor(id: number, titulo: string, image: string, description: string) {
    this.id = id
    this.title = titulo
    this.image = image
    this.description = description
  }
}

export default Pratos
