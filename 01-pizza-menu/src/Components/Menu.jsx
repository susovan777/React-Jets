import React from "react";
import pizzaData from "../data";
import Pizza from "./Pizza";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            // name={pizza.name}
            // ingrredients={pizza.ingredients}
            // photo={pizza.photoName}
            // price={pizza.price}
            pizza={pizza}
            key={pizza.name}
          />
        ))}
      </ul>
      {/* <Pizza
        name='Pizza Margherita'
        ingrredients='Tomato and mozarella'
        photo='pizzas/margherita.jpg'
        price='10'
      /> */}
    </main>
  );
};

export default Menu;
