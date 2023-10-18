import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export default function Provider({ children }) {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  const getPizzas = async () => {
    const response = await fetch("/pizzas.json");
    const data = await response.json();
    setPizzas(data);
  };

  const addToCart = (pizza) => {
    const existingPizza = cart.find((p) => p.id === pizza.id);
  
    if (existingPizza) {
      const updatedCart = cart.map((p) =>
        p.id === pizza.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
  };

  const removePizza = (pizzaId) => {
    const updatedCart = cart.filter((p) => p.id !== pizzaId);
    setCart(updatedCart);
  };

  const updatePizzaQuantity = (pizzaId, quantity) => {
    const updatedCart = cart.map((p) =>
      p.id === pizzaId ? { ...p, quantity } : p
    );
    setCart(updatedCart);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <AppContext.Provider
      value={{
        pizzas,
        cart,
        addToCart,
        removePizza,
        updatePizzaQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}