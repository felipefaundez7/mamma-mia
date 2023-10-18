import React from 'react';
import { Card } from 'react-bootstrap';

export default function PizzaDetail({ pizza }) {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={pizza.img} />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Text>{pizza.desc}</Card.Text>
          <Card.Text>Ingredients: {pizza.ingredients.join(', ')}</Card.Text>
          <Card.Text>Price: ${pizza.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}