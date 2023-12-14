import Product from '../Product'
import { Container, List } from './styles'

import sushi from '../../assets/images/imagem.png'

const ProductList = () => (
  <Container>
    <List>
      <Product
        title="teste"
        image={sushi}
        nota="10"
        infos="japonesa"
        destaque="Destaque da semana"
        description="vai tomar no cu"
      />
      <Product
        title="teste"
        image={sushi}
        nota="10"
        infos="japonesa"
        destaque="Destaque da semana"
        description="puta que pariu "
      />
      <Product
        title="teste"
        image={sushi}
        nota="10"
        infos="japonesa"
        destaque="Destaque da semana"
        description="puta que pariu "
      />
      <Product
        title="teste"
        image={sushi}
        nota="10"
        infos="japonesa"
        destaque="Destaque da semana"
        description="puta que pariu "
      />
      <Product
        title="teste"
        image={sushi}
        nota="10"
        infos="japonesa"
        destaque="Destaque da semana"
        description="puta que pariu "
      />
      <Product
        title="teste"
        image={sushi}
        nota="10"
        infos="japonesa"
        destaque="Destaque da semana"
        description="puta que pariu "
      />
    </List>
  </Container>
)

export default ProductList
