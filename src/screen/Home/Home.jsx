import React, { useContext } from "react";
import "./homeStyles.css";

import { AppContext } from "../../context/PizzaContext";
import PizzaCard from "../../components/PizzaCard/PizzaCard";

export default function Home() {
  const context = useContext(AppContext);
  let allPizzas = context.pizzas;

  return (
    <div className="body">
      <div className="home">
        <section className="banner">
          <h1 className="fw-bold">Pizzería Mamma Mia!</h1>
          <p>Tenemos las mejores pizzas que podrás encontrar</p>
        </section>
        <section className="catalogo">
          {allPizzas
            ? allPizzas.map((pizza) => (
                <PizzaCard key={pizza.id} pizza={pizza} className="card"/>
              ))
            : "CARGANDO"}
        </section>
      </div>
    </div>
  );
}
