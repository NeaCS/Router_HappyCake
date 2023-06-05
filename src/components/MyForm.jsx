import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const MyForm = () => {
  return (
    <Container className="d-flex justify-content-center">
    <Form style={{ maxWidth: '400px' }}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Dirección de correo</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su correo" />
        <Form.Text className="text-muted">
          Nunca compartiremos tus datos con nadie
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicSubject">
        <Form.Label>Asunto</Form.Label>
        <Form.Control type="text" placeholder="Ingrese un asunto" />
      </Form.Group>

      <Form.Group controlId="formBasicMessage">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Ingrese un mensaje" />
      </Form.Group>

      <Button style={{backgroundColor: "#DC3546"}} variant="primary" type="submit" className='mt-3'>
        Envíar
      </Button>
    </Form>
  </Container>
  )
}

export default MyForm