import { Route, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


import Home from './screen/Home/Home'
import PizzaDetail from './screen/PizzaDetail'
import Cart from './screen/Cart'


import PizzaNavbar from './components/Navbar/PizzaNavbar'


function App() {
  
  return (
    <>
      <PizzaNavbar />
        <Routes>  
          <Route index element={<Home />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/pizza/:id'element={<PizzaDetail/>} />
          <Route path='/carrito'element={<Cart/>} />
      </Routes>
        
    </>
  );
}

export default App
