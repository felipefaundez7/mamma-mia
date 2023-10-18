import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/PizzaContext";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navStyles.css";
import pizzalogo from "../../assets/logo.png";

export default function PizzaNavbar() {
  const { totalCart, monedaLocal } = useContext(AppContext);

  return (
    <Navbar fixed="top" bg="warning" data-bs-theme="light">
    <Container>
      <Navbar.Brand href={"/home"}>
        <img src={pizzalogo} alt="logopizza" className="logopizza" />
        Pizzeria Mamma Mia!
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href={"/home"}>Home</Nav.Link>
        
        <Nav.Link href={"/carrito"}>Carrito</Nav.Link>
      </Nav>
    </Container>
    </Navbar>
  );
}


