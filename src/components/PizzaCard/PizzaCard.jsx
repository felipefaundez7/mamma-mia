import React, { useContext } from "react";
import { AppContext } from "../../context/PizzaContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function PizzaCard({ pizza }) {
  const { addToCart } = useContext(AppContext);

  const handleAddToCart = () => {
    addToCart(pizza);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>{pizza.desc}</Card.Text>
        <Card.Text>Ingredients: {pizza.ingredients.join(", ")}</Card.Text>
        <Card.Text>Price: ${pizza.price}</Card.Text>
        <Button variant="warning" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}