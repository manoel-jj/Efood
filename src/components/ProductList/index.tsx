import Product from '../Product'
import { Container, List } from './styles'

import sushi from '../../assets/images/imagem.png'

const ProductList = () => (
  <Container>
    <List>
      <Product
        title="Hioki Sushi "
        image={sushi}
        nota="4.7"
        infos="japonesa"
        destaque="Destaque da semana"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.
        Experimente o Japão sem sair do lar com nosso delivery!"
      />
      <Product
        title="La Dolce Vita Trattoria"
        image={sushi}
        nota="10"
        infos="japonesa"
        destaque="Destaque da semana"
        description="puta que pariu "
      />
      <Product
        title="La Dolce Vita Trattoria"
        image={sushi}
        nota="10"
        infos="japonesa"
        destaque="Destaque da semana"
        description="puta que pariu "
      />
      <Product
        title="La Dolce Vita Trattoria"
        image={sushi}
        nota="10"
        infos="japonesa"
        destaque="Destaque da semana"
        description="puta que pariu "
      />
      <Product
        title="La Dolce Vita Trattoria"
        image={sushi}
        nota="4.6"
        infos="Italiana"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        destaque={''}
      />
    </List>
  </Container>
)

export default ProductList
