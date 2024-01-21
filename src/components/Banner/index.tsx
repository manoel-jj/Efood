import { Image } from './styles'

import vector from '../../assets/images/Vector.svg'
import logo from '../../assets/images/logo.svg'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${vector})` }}>
    <div className="container">
      <a href="/">
        <img src={logo} />
      </a>
      <h2>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </h2>
    </div>
  </Image>
)

export default Banner
