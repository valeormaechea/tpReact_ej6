import React from "react";
import ItemColor from "./ItemColor";
import ListGroup from "react-bootstrap/ListGroup";

const ListaColores = (props) => {
  return (
    <div className="d-flex flex-wrap">
      <ListGroup>
        {props.arregloColores.map((item, posicion) => (
          <ItemColor
            key={posicion}
            color={item}
            codColor={props.arregloCodColores[posicion]}
            borrarColor={props.borrarColor}
          ></ItemColor>
        ))}
      </ListGroup>
    </div>
  );
};

export default ListaColores;
