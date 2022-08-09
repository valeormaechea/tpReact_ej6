import React from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

const Formulario = () => {
  return (
    <div className='m-5'>
      <Card>
        <Card.Header>Administrar colores</Card.Header>
        <Card.Body id='cardFormulario' className='d-flex'>
          <div className='col-4'>
          </div>
          <div className='col-8'>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ingrese un color</Form.Label>
                <Form.Control type="email" placeholder="Amarillo, azul" />
              </Form.Group>
            </Form>
          </div>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-end'>
          <Button variant="info" type="submit">
            Guardar
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Formulario;