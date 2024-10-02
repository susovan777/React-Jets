import React, { useState } from "react";

const AddTransaction = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <div className="section">
      <h3 className="sub-heading">Add New Transaction</h3>
      <form className="control">
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            placeholder="Enter Text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            placeholder="Enter amount"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </form>
      <br />
      <button>Add Transaction</button>
    </div>
  );
};

export default AddTransaction;
