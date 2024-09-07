import React from "react";

const itemData = [
  {
    id: 1,
    description: "Adapter",
    quantity: 2,
    packed: true,
  },
  {
    id: 2,
    description: "Mat",
    quantity: 1,
    packed: false,
  },
];

const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {itemData.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

const Item = ({ item }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>{" "}
      <button>❌</button>
    </li>
  );
};

export default PackingList;
