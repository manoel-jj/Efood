import { TagContainer } from './styles'

type Props = {
  texto: string
}

const Tag = ({ texto }: Props) => <TagContainer>{texto}</TagContainer>

export default Tag
