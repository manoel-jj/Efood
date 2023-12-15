import { Nota, Image, ContainerNota } from './styles'

import estrela from '../../assets/images/estrela.svg'

type Props = {
  valorNota: string
}

const Avaliacao = ({ valorNota }: Props) => (
  <ContainerNota>
    <Nota>{valorNota}</Nota>
    <Image src={estrela} alt="estrela" />
  </ContainerNota>
)
export default Avaliacao
