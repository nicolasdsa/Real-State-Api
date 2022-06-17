import './App.css';
import {Route, Routes} from 'react-router-dom';
import React from "react"
import Header from './header/Header';
import Unexpected from './notFound/Unexpected';
import Cartorio from './cartorio/Cartorio';
import Imoveis from './imoveis/Imoveis';
import Footer from './footer/Footer';
import Home from './home/Home'
import Locatario from './locatario/Locatario'
import Locador from './locador/Locador'

function App() {

  return (
    <div className='container'>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/contratos' element={<Cartorio/>}></Route>
          <Route path='/imoveis' element={<Imoveis/>}></Route>
          <Route path='/locatario' element={<Locatario/>}></Route>
          <Route path='/Locador' element = {<Locador/>}></Route>
          <Route path='*' element={<Unexpected/>}></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
