import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Colores = (props) => {
  return (
    <div className="mx-2 mb-3">
      <Card>
        <Card.Body>
          <Card.Title>{props.color}</Card.Title>
          <Card.Subtitle>{props.codColor}</Card.Subtitle>
          <div
            id="imgColor"
            className="my-3"
            style={{ backgroundColor: props.codColor }}
          ></div>

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
