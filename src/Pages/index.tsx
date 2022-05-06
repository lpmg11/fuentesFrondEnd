import React from "react";
import { Header } from "../Library/comons";
import Cards from "../components/Cards";
import axios from "axios";
import { filtrarElementos } from "../utilitis/filtrar";
import { useState } from "react";

function Index() {
  const [elements, setElements] = useState([]);
  const [filteredElements, setFilteredElements] = useState<any>([]);
  const [isSearch, setSearch] = useState(false);

  function cargarElementos() {
    axios.get("http://localhost:3001/fuentes").then((res) => {
      setElements(res.data);
    });
  }

  (elements.length === 0 && cargarElementos());

  function filtrar(event: any) {
    let filtro = filtrarElementos(elements, event.target.value);
    setFilteredElements(filtro);
    event.target.value === "" ? setSearch(false) : setSearch(true);
  }

  return (
    <div className="App">
      <Header tittle="Control de Fuentes" />
      <input
        type="text"
        name="Filtro"
        placeholder="Nombre de la fuente"
        onChange={filtrar}
      />
      <Cards elements={ isSearch ? filteredElements : elements } />
    </div>
  );
}

export default Index;
