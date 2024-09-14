import React from "react";

const PackingList = ({ items, onDeleteItem, checkEvent }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              deleteItem={onDeleteItem}
              checkEvent={checkEvent}
            />
          );
        })}
      </ul>
    </div>
  );
};

const Item = ({ item, deleteItem, checkEvent }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => checkEvent(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.entry}
      </span>{" "}
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
};

export default PackingList;

/* 
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
 */