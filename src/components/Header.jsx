import React from "react";
import Search from "./Search";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return <header className="header">
    <div className="logo">LOGO</div>
    <Search></Search>
    <div>BANNER</div>
    <div>ENVIAR A</div>
    <ul>
      <li><a href="" className="navItem">Crear cuenta</a></li>
      <li><a href="" className="navItem">Ingresar</a></li>
      <li><a href="" className="navItem">Ayuda</a></li>
    </ul>
    <ul>
      <li><a href="" className="navItem">Mis compras</a></li>
      <li><a href="" className="navItem">Vender</a></li>
      <li><a href=""><FontAwesomeIcon icon={faShoppingCart}/></a></li>
    </ul>
  </header>;
}

export default Header;