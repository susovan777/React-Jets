import React, { useState } from "react";

const Form = () => {
  const [entry, setEntry] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { quantity, entry, packed: false, id: Date.now() };
    console.log(newItem);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? </h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
};

export default Form;
