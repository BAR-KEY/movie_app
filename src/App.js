import React from "react";
import PropTypes from "prop-types";

const foodlist = [
  {
    name: "apple",
    price: "3000",
    taste: "6",
    key: "1",
  },
  {
    name: "banana",
    price: "7000",
    taste: "7",
    key: "2",
  },
  {
    name: "cow",
    price: "3000000",
    taste: "10",
    key: "3",
  },
  {
    name: "durag",
    price: "15000",
    taste: "0",
    key: "4",
  },
];

function Food({ name, price, taste }) {
  return (
    <div>
      <h1>i like {name}, </h1>
      <h1>it's cost {price} </h1>
      <h1>and taste point is {taste}/10</h1>
      <br />
    </div>
  );
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  taste: PropTypes.string.isRequired,
};
function renderFood(dish) {
  return (
    <Food
      name={dish.name}
      price={dish.price}
      taste={dish.taste}
      key={dish.key}
    />
  );
}
function App() {
  return <>{foodlist.map(renderFood)}</>;
}

export default App;
