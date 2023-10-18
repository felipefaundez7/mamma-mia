import React, { useContext } from "react";
import { AppContext } from "../context/PizzaContext";
import '../screen/cartStyles.css'
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';

export default function Cart() {
  const { cart, removePizza, updatePizzaQuantity } = useContext(AppContext);

  const handleRemovePizza = (pizza) => {
    removePizza(pizza.id);
  };

  const handleIncreaseQuantity = (pizza) => {
    updatePizzaQuantity(pizza.id, pizza.quantity + 1);
  };

  const handleDecreaseQuantity = (pizza) => {
    if (pizza.quantity > 1) {
      updatePizzaQuantity(pizza.id, pizza.quantity - 1);
    }
  };

  return (
    <Container className="cart-body">
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((pizza) => (
              <tr key={pizza.id}>
                <td>
                  <img src={pizza.img} alt={pizza.name} style={{ width: "50px" }} />
                </td>
                <td>{pizza.name}</td>
                <td>{pizza.quantity}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={() => handleIncreaseQuantity(pizza)}
                  >
                    +
                  </Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => handleDecreaseQuantity(pizza)}
                  >
                    -
                  </Button>{" "}
                  <Button
                    variant="primary"
                    onClick={() => handleRemovePizza(pizza)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}