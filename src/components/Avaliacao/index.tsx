import { Nota, Image } from './styles'

import estrela from '../../assets/images/estrela.svg'

type Props = {
  valorNota: string
}

const Avaliacao = ({ valorNota }: Props) => (
  <Nota>
    {valorNota}
    <Image src={estrela} alt="estrela" />
  </Nota>
)
export default Avaliacao
