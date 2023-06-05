import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavBar = () => {
  return (
    <Navbar
      style={{ backgroundColor: "#DC3546", marginBottom: "7%" }}
      variant="dark"
    >
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Navbar.Brand>
            HAPPY CAKE
          </Navbar.Brand>
        </div>
        <div>
          <Nav className="me-auto">
            <Link to="/" style={{ marginRight: "10px", color: "white" }}>
              Home
            </Link>
            <Link
              to="/contacto"
              style={{ marginRight: "10px", color: "white" }}
            >
              Contacto
            </Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;
