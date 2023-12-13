import Product from '../Product'
import { Container, List } from './styles'

const ProductList = () => (
  <Container>
    <List>
      <Product />
      <Product />
    </List>
  </Container>
)

export default ProductList
