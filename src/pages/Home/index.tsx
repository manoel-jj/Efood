import RestauranteList from '../../components/RestauranteList'
import Pratos from '../../models/Pratos'

import sushi from '../../assets/images/imagem.png'
import macarrao from '../../assets/images/macarrao.png'
import { Header } from '../../components/Header'

const restauranteHome: Pratos[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    Infos: 'japonesa',
    destaque: 'Destaque da semana',
    title: 'Hioki Sushi',
    nota: '4.7',
    image: sushi
  },
  {
    id: 2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    Infos: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    image: macarrao
  },
  {
    id: 3,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    Infos: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    image: macarrao
  },
  {
    id: 4,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    Infos: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    image: macarrao
  },
  {
    id: 5,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    Infos: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    image: macarrao
  },
  {
    id: 6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    Infos: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    image: macarrao
  }
]

const Home = () => (
  <>
    <Header />
    <RestauranteList pratos={restauranteHome} />
  </>
)

export default Home
