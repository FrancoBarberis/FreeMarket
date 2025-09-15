import React from "react";
import Search from "./Search";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/MusimarketLOGO.png";

function Header() {
  return <header className="header">
    <div ><img className="logo" src={logo} alt="logo" /></div>
    <div className="gridHeader">
    <Search></Search>
      <div>BANNER</div>
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
    </div>
    
  </header>;
}

export default Header;