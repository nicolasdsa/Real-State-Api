import './Header.css';
import React from "react"
import logotipo from '../img/logo.png';
import { Link } from 'react-router-dom';


function Header() {

  return (
    <header className="header">
      <ul className='listHeader'>
        <li><Link className='link' to='/'><img className='logotipo' alt='Logotipo Casarinha'  src={logotipo}></img></Link>
        </li>
        <li><Link to = '/contratos'>Contratos</Link></li>
        <li><Link to = '/locador'>Locadores</Link></li>
        <li><Link to = '/locatario'>Locatários</Link></li>
        <li><Link to = '/imoveis'>Imóveis</Link></li>
      </ul>
    </header>
  );
}

export default Header;