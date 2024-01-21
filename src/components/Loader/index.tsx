import { PulseLoader } from 'react-spinners'
import { Container, colors } from '../../styles'

const Loader = () => (
  <Container>
    <PulseLoader color={colors.orange} />
  </Container>
)

export default Loader
