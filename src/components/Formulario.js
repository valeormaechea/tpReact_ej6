import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Formulario.css";
import ListaColores from "./ListaColores";

const Formulario = () => {
  let coloresLocalStorage =
    JSON.parse(localStorage.getItem("nombreColores")) || [];
  let codColoresLocalStorage =
    JSON.parse(localStorage.getItem("codColores")) || [];

  const [arregloColores, setArregloColores] = useState(coloresLocalStorage);
  const [arregloCodColores, setArregloCodColores] = useState(
    codColoresLocalStorage
  );
  const [codColor, setCodColor] = useState("#FFFFFF");
  const [nombreColor, setNombreColor] = useState("");

  useEffect(() => {
    localStorage.setItem("nombreColores", JSON.stringify(arregloColores));
    localStorage.setItem("codColores", JSON.stringify(arregloCodColores));
  }, [arregloColores, arregloCodColores]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Actualizar el arreglo de colores
    setArregloColores([...arregloColores, nombreColor]);
    setArregloCodColores([...arregloCodColores, codColor]);
    setCodColor("#FFFFFF");
    setNombreColor("");
    console.log(`arreglocolores ${arregloColores}`);
    console.log(`arreglocodcolores ${arregloCodColores}`);
  };

  const borrarColor = (nombreColor, codColor) => {
    let arregloModificadoColores = arregloColores.filter((valor) => {
      return valor != nombreColor;
    });
    setArregloColores(arregloModificadoColores);
    let arregloModificadoCodColores = arregloCodColores.filter((value) => {
      return value != codColor;
    });
    setArregloCodColores(arregloModificadoCodColores);
  };

  return (
    <div className="m-5">
      <Card>
        <Card.Header>Administrar colores</Card.Header>
        <Card.Body id="cardFormulario" className="d-flex">
          <div className="col-4 d-flex justify-content-center">
            <div id="imgColor" style={{ backgroundColor: codColor }}></div>
          </div>
          <div className="col-8">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Elija un color de la rueda</Form.Label>
                <Form.Control
                  type="color"
                  placeholder="Amarillo, azul"
                  onChange={(e) => setCodColor(e.target.value.trimStart())}
                  value={codColor}
                  id="textColor"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Ingrese el nombre del color</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Amarillo, azul"
                  onChange={(e) => setNombreColor(e.target.value.trimStart())}
                  value={nombreColor}
                  id="textColor"
                  required
                />
              </Form.Group>
              <Button variant="info" type="submit">
                Guardar
              </Button>
            </Form>
          </div>
        </Card.Body>
      </Card>
      <ListaColores
        arregloColores={arregloColores}
        arregloCodColores={arregloCodColores}
        borrarColor={borrarColor}
      ></ListaColores>
    </div>
  );
};

export default Formulario;
