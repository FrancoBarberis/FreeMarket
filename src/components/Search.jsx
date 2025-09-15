import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search(){
    return <div className="buscador">
      <input type="text" id="buscador" placeholder="Buscar productos, marcas, etc..."/>
      <button id="botonBuscar"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    </div>;
}

export default Search;