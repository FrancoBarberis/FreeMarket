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
      <li><a href="" className="navItem">CREAR CUENTA</a></li>
      <li><a href="" className="navItem">INGRESAR</a></li>
      <li><a href="" className="navItem">MIS COMPRAS</a></li>
    </ul>
    <a href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
  </header>;
}

export default Header;