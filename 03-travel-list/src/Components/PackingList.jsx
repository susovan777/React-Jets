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

const PackingList = ({ items }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
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
        {item.quantity} {item.entry}
      </span>{" "}
      <button>❌</button>
    </li>
  );
};

export default PackingList;
