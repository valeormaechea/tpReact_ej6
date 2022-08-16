import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Colores = (props) => {
  return (
    <div className="d-flex">
      <Card>
        <Card.Body>
          <Card.Title>{props.color}</Card.Title>

          <div id="imgColor" style={{ backgroundColor: props.codColor }}></div>

          <Button
            variant="danger"
            onClick={() => props.borrarColor(props.color, props.codColor)}
          >
            Borrar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Colores;
