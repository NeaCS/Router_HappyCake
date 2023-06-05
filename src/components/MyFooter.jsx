import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';



const MyFooter = () => {
  return (
    <footer className="mt-3 pt-3" style={{backgroundColor: '#DC3546'}}>
      <Container>
        <Row>
          <Col md={6}>
            <h5>Contáctanos</h5>
            <p>
              Teléfono: (+56) 456-7890<br />
              Email: info@happycake.com
            </p>
          </Col>
          <Col md={6}>
            <h5>Follow Us</h5>
            <a href="https://www.facebook.com/"><FaFacebook color="white" size={30} /></a>{' '}
            <a href="https://twitter.com/"><FaTwitter color="white" size={30} /></a>{' '}
            <a href="https://www.instagram.com/"><FaInstagram color="white" size={30} /></a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default MyFooter