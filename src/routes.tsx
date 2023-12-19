import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Cardapio from './pages/Cardapio'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Cardapio" element={<Cardapio />} />
  </Routes>
)

export default Rotas
