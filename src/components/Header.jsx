import React from "react";

function Header() {
  return <header className="header">
    <div className="logo">LOGO</div>
    <div className="buscador"><input type="text" placeholder="Buscar productos, marcas, etc..."/></div>
    <div>BANNER</div>
    <div>ENVIAR A</div>
    <ul>
      <li><a href="" className="navItem">CREAR CUENTA</a></li>
      <li><a href="" className="navItem">INGRESAR</a></li>
      <li><a href="" className="navItem">MIS COMPRAS</a></li>
    </ul>
    <a href=""><i class="fa-thin fa-cart-shopping"></i></a>
  </header>;
}

export default Header;