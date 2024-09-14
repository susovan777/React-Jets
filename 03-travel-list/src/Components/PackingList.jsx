import React, { useState } from "react";

const PackingList = ({ items, onDeleteItem, checkEvent, clearEvent }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items.slice().sort((a, b) => a.entry.localeCompare(b.entry));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
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

      {items.length ? (
        <>
          <div className="actions">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="input">Sort By Input Orders</option>
              <option value="description">Sort By Description</option>
              <option value="packed">Sort By Packed Status</option>
            </select>

            <button onClick={clearEvent}>Clear List</button>
          </div>
        </>
      ) : (
        ""
      )}
      {/* <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input Orders</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed Status</option>
        </select>

        <button onClick={clearEvent}>Clear List</button>
      </div> */}
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
